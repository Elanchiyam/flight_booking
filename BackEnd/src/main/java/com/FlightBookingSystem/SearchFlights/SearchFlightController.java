package com.FlightBookingSystem.SearchFlights;


import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightInfo;
import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SearchFlightController {

    @Autowired
    AdminFlightRepository adminFlightRepository;


//    public static int flightCount = 3;
//    private static final List<TestFlightDetails> flights = new ArrayList<>();
//    static {
//        flights.add(new TestFlightDetails("AirAsia","0AB7","3 hr","2000"));
//        flights.add(new TestFlightDetails("Indigo","0BA4","5 hr","3000"));
//        flights.add(new TestFlightDetails("SpiceJet","1KW5","4 hr","6000"));
//    }
//
//
//    @GetMapping("/search")
//    public String searchFlight(
//            @ModelAttribute("username") SearchFlightDetails flight,
//            BindingResult result, ModelMap model
//        ){
//
//            System.out.println(flight.toString());
//            return flights.toString();
//
//    }

    @GetMapping("/searchFlightInDB")
    public List<AdminFlightInfo> searchFlightWithLogic(
            @RequestParam String from,
            @RequestParam String to,
            @RequestParam @DateTimeFormat(pattern="yyyy-MM-dd")Date date,
            @RequestParam String classType,
            @RequestParam Integer adult,
            @RequestParam Integer child
            ){

               // System.out.println(flight.toString());
        Integer totalTicketCount = adult + child;

        System.out.println(from + to + date + classType + adult + child);
//        List<AdminFlightInfo> SearchedFlight =
       //   return (adminFlightRepository.getFlightDetails(from,to,date,totalTicketCount));
        return (adminFlightRepository.getFlightDetails(from,to,date,totalTicketCount));
//        System.out.println(SearchedFlight);
//
//        return ResponseEntity.noContent().build();

    }
}
