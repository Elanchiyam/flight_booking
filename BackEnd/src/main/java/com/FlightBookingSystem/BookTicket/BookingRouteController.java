package com.FlightBookingSystem.BookTicket;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookingRouteController {


    @PostMapping (value = "/bookTicket")
    public String getbookingDetails(@RequestBody SelectedFlightDetails ticket){
        List<SelectedFlightDetails> selectedFlightDetails = new ArrayList<>();
        selectedFlightDetails.add(ticket);
        System.out.println(ticket.toString());
        return "Success";
    }

}
