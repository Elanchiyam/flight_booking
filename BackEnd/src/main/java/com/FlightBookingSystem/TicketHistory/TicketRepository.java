package com.FlightBookingSystem.TicketHistory;


import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightInfo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TicketRepository extends MongoRepository<TicketHistoryDetails,String> {


    @Query("{'userName':?0}")
    public TicketHistoryDetails getFlightById(String userName);

    @Query("{'userName':?0}")
    public List<TicketHistoryDetails> getHistory(String userName);

}
