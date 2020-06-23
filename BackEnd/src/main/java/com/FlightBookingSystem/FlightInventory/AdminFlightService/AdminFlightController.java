package com.FlightBookingSystem.FlightInventory.AdminFlightService;

import com.FlightBookingSystem.FlightInventory.FlightInfoService;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class AdminFlightController {

    @Autowired
    AdminFlightRepository adminFlightRepository;

//    private final MongoTemplate mongoTemplate;
//    @Autowired
//    public AdminFlightController(MongoTemplate mongoTemplate) {
//        this.mongoTemplate = mongoTemplate;
//    }



    @PostMapping ("/flightAdmin")
    ResponseEntity<?> insertFlightInventory(@RequestBody AdminFlightInfo adminFlightInfo ){

        System.out.println(adminFlightInfo.toString());
        Integer availableSeats = adminFlightInfo.getTotalSeats() - adminFlightInfo.getReservedSeats();
        AdminFlightInfo newFlight = new AdminFlightInfo(adminFlightInfo.getAirline(),adminFlightInfo.getAircraftCode(),adminFlightInfo.getFrom(),adminFlightInfo.getTo(),adminFlightInfo.getDate(),adminFlightInfo.getFare(),adminFlightInfo.getTotalSeats(),adminFlightInfo.getReservedSeats(),availableSeats);
       System.out.println(newFlight.toString());
        adminFlightRepository.save(newFlight);
        return ResponseEntity.noContent().build();
   }


}
