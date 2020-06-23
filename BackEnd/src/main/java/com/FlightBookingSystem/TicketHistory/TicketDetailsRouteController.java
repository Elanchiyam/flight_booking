package com.FlightBookingSystem.TicketHistory;

import com.FlightBookingSystem.TicketHistory.TicketDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TicketDetailsRouteController {

    @Autowired
    TicketRepository ticketRepository;

    @GetMapping("/viewTicketHistory")
    public List<TicketHistoryDetails> getTicketHistory(@RequestParam String userName){
        System.out.println("View Ticket History  " + userName);
        List<TicketHistoryDetails> history = ticketRepository.getHistory(userName);
        return history;

    }
}

