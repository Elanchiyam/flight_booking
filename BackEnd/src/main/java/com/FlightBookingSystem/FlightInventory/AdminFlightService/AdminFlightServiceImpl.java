package com.FlightBookingSystem.FlightInventory.AdminFlightService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AdminFlightServiceImpl {
    private final MongoTemplate mongoTemplate;
    @Autowired
    public AdminFlightServiceImpl(MongoTemplate mongoTemplate){
        this.mongoTemplate = mongoTemplate;
    }
}
