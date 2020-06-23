package com.FlightBookingSystem.BookTicket;


import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightInfo;
import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightRepository;
import com.FlightBookingSystem.TicketHistory.TicketDetails;
import com.FlightBookingSystem.TicketHistory.TicketHistoryDetails;
import com.FlightBookingSystem.TicketHistory.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookingRouteController {
    @PostMapping("/flightTest")
    public void Test(@RequestBody String message){
        System.out.println("Tested Successfully=============================>");
    }

    @PostMapping (value = "/bookTicket")
    public String getbookingDetails(@RequestBody SelectedFlightDetails ticket){
        List<SelectedFlightDetails> selectedFlightDetails = new ArrayList<>();
        selectedFlightDetails.add(ticket);
        //Details => user id, ticket ( flight id,count, total fare), credit card details.

        // checkCreitCardDetails() == FAILRE
        // ERROR MG: Invalid Credit card details
        // return FAILURE

        // Check count is equal or greater than available_seat_count in MondoDB flight inventory table.
        // Verify in flight inventory Mongo db, if it met requirements
        // Update Mongodb
        // CheckDirectlyMongoDFlightInventory == FAILURE
        // ERROR MSG: Booking failed. Money will be returned.
        // return FALIURE

        //  UpdateDirectlyMongoDBFlightInventory() == FAILURE
        // ERROR MSG: Booking failed. Money will be returned.
        // return FALIURE


        // update user booking status
        // Update Userdb - for ticket history  seperate mongo db
        // UpdateDirectlyMongoDBTicketHistory() == FAILURE


        // Send Notification Ticket
        // Email -> get from mysql
        // send ticket details to email.


        System.out.println(ticket.toString());
        return "Success";
    }

    @Autowired
    AdminFlightRepository adminFlightRepository;

    @Autowired
    TicketRepository ticketRepository;

    @PostMapping("/ConfirmTicket")
    ResponseEntity<?>  ConfirmFlightTicket(@RequestBody BookedTicketDetails bookedTicketDetails){

        try {
            //Check credit card
            CreditCardDetails cardDetails = new CreditCardDetails(bookedTicketDetails.getCvc() , bookedTicketDetails.getExpiry() , bookedTicketDetails.getName() , bookedTicketDetails.getNumber());
            System.out.println("Credit Card Details============>" + cardDetails);
            if(cardDetails.getCvc()==null  || cardDetails.getExpiry() == null || cardDetails.getName()==null || cardDetails.getNumber() == null){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            //get Flight Details
            AdminFlightInfo flight = adminFlightRepository.getFlightById(bookedTicketDetails.getFlightId());
            System.out.println(flight.toString());
            //get ticket count
            Integer totalCount = bookedTicketDetails.getTicketCount();
            //check for available seats
            if(flight.getAvailableSeats() < totalCount){
                return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
            }
            //update reserved seats
            flight.setReservedSeats(totalCount  + flight.getReservedSeats() );
            System.out.println(bookedTicketDetails.getTicketCount());
            flight.setAvailableSeats(flight.getAvailableSeats() - totalCount );

            //update Flight Inventry
            System.out.println(flight.toString());
            adminFlightRepository.save(flight);

            Integer totalFare = totalCount * flight.getFare();

            //update user Inventry
            UUID uuid = UUID.randomUUID();
            System.out.println(uuid);

            //Generate Ticket details to be updated in User Ticket history
            TicketDetails ticketDetails = new TicketDetails(uuid,flight.getFrom(),flight.getTo(),flight.getDate(),flight.getAirline(),flight.getAircraftCode(),totalCount,totalFare);
            System.out.println(ticketDetails);

            //create object for ticket history
            TicketHistoryDetails historyDetails = new TicketHistoryDetails(bookedTicketDetails.getUserName(),ticketDetails);
            System.out.println("ticket History detail =====>" +historyDetails.toString());

            String userName = bookedTicketDetails.getUserName();
            //get user db
            TicketHistoryDetails exUser = ticketRepository.getFlightById(userName);
            System.out.println("Existing user" + exUser);

            //update user db
            ticketRepository.save(historyDetails);



            return ResponseEntity.noContent().build();
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
