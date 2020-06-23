package com.FlightBookingSystem.FlightInventory.AdminFlightService;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Date;
import java.util.List;

public interface AdminFlightRepository extends MongoRepository <AdminFlightInfo,String>{




    @Query("{'from':?0,'to':?1,'date': {$gte: ?2}, 'availableSeats': {$gte: ?3}}")
    public List<AdminFlightInfo> getFlightDetails(String from, String to, Date Date,Integer availableSeats);

    @Query("{'_id':?0}")
    public AdminFlightInfo getFlightById(String id);
}
