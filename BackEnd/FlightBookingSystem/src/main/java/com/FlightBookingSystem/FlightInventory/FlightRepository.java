package com.FlightBookingSystem.FlightInventory;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Date;
import java.util.List;

public interface FlightRepository extends MongoRepository<FlightInfo,String> {
    List<FlightInfo> findByfrom(String from);

    @Query("{'from':?0,'to':?1,'date': {$gte: ?2}}")

    public List<FlightInfo> findByDate(String from,String to,Date Date);

    @Query("{'fare':?0}")
    List<FlightInfo> findByfare(Integer fare);
}
