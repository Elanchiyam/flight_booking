package com.FlightBookingSystem.SearchFlights;


import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SearchFlightController {
    public static int flightCount = 3;
    private static final List<TestFlightDetails> flights = new ArrayList<>();
    static {
        flights.add(new TestFlightDetails("AirAsia","0AB7","3 hr","2000"));
        flights.add(new TestFlightDetails("Indigo","0BA4","5 hr","3000"));
        flights.add(new TestFlightDetails("SpiceJet","1KW5","4 hr","6000"));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/search")
    public String searchFlight(
            @ModelAttribute("username") SearchFlightDetails flight,
            BindingResult result, ModelMap model
        ){

            System.out.println(flight.toString());
            return flights.toString();

    }

}
