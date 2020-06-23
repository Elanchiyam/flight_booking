package com.FlightBookingSystem.FlightInventory;

import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightInfo;
import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/flights")
public class FlightInventoryController {

    @Autowired
    private FlightInfoService flightInfoService;

    @Autowired
    AdminFlightRepository adminFlightRepository;


    @GetMapping("/{from}")
    public List<FlightInfo> getFlightDetails(@PathVariable("from") String from){
        return flightInfoService.findByfrom(from);
    }

    @GetMapping("/searchFlight")
    public List<FlightInfo> getFlightDetailsOnDate(@RequestParam String from,@RequestParam String to,@RequestParam @DateTimeFormat(pattern="yyyy-MM-dd")Date date){
        System.out.println("Date - "+date + "from - "+from+"to - "+ to);
        return flightInfoService.findByDate(from,to,date);
    }

    @GetMapping("/flightFare")
    public  List<FlightInfo> getFlightDetailsOnFare(@RequestParam Integer fare){
        System.out.println("Fare =>"+fare);
        return flightInfoService.findByfare(fare);
    }


//    @GetMapping("/searchFlightInDB")
//    public ResponseEntity<?> searchFlightWithLogic(
//            @RequestParam String from,
//            @RequestParam String to,
//            @RequestParam @DateTimeFormat(pattern="yyyy-MM-dd")Date date,
//            @RequestParam String classType,
//            @RequestParam Integer adultCount,
//            @RequestParam Integer childCount
//    ){
//
//        // System.out.println(flight.toString());
//        int totalTicketCount = adultCount + childCount;
//
//        System.out.println(from + to + date + classType + adultCount + childCount);
//        List<AdminFlightInfo> SearchedFlight = adminFlightRepository.getFlightDetails(from,to,date,totalTicketCount);
//        System.out.println(SearchedFlight);
//
//        return ResponseEntity.noContent().build();
//
//    }
    
}
