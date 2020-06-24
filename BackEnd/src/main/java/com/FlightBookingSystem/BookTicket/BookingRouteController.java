package com.FlightBookingSystem.BookTicket;


import com.FlightBookingSystem.Authentication.AuthenticationController;
import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightInfo;
import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightRepository;
import com.FlightBookingSystem.NotificationService.NotificationRouteController;
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
import java.util.concurrent.locks.ReentrantLock;

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

    @Autowired
    NotificationRouteController notificationRouteController;

    @Autowired
    AuthenticationController authenticationController;


    @PostMapping("/ConfirmTicket")
    public ResponseEntity<?>  ConfirmFlightTicket(@RequestBody BookedTicketDetails bookedTicketDetails){

        //Sequence the user Request
        ReentrantLock mutex = new ReentrantLock();
        mutex.lock();



        try {
            //Check credit card
            CreditCardDetails cardDetails = new CreditCardDetails(bookedTicketDetails.getCvc() , bookedTicketDetails.getExpiry() , bookedTicketDetails.getName() , bookedTicketDetails.getNumber());
            System.out.println("Credit Card Details============>" + cardDetails);
            if(cardDetails.getCvc()==null  || cardDetails.getExpiry() == null || cardDetails.getName()==null || cardDetails.getNumber() == null){
               mutex.unlock();
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            //get Flight Details
            AdminFlightInfo flight = adminFlightRepository.getFlightById(bookedTicketDetails.getFlightId());
            System.out.println("====================>"+flight.toString());
            //get ticket count
            Integer totalCount = bookedTicketDetails.getTicketCount();
            //check for available seats
            if(flight.getAvailableSeats() < totalCount){
                mutex.unlock();
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

//            String userName = bookedTicketDetails.getUserName();
//            //get user db
//            TicketHistoryDetails exUser = ticketRepository.getFlightById(userName);
//            System.out.println("Existing user" + exUser);

            //update user db
            ticketRepository.save(historyDetails);

            //email
            String email = authenticationController.retrieveEmailDetails(bookedTicketDetails.getUserName());
            //send Notification to User
            notificationRouteController.sendEmailNotification(email,historyDetails);

            mutex.unlock();
            return ResponseEntity.noContent().build();
        }
        catch (Exception e) {
            mutex.unlock();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
