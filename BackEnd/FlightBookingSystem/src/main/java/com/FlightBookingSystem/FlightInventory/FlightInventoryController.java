package com.FlightBookingSystem.FlightInventory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

    
}
