package com.FlightBookingSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@Component
public class TicketService {
    public static int ticketCount = 3;
    private static final List<TicketDetails> tickets = new ArrayList<>();

    static {
        tickets.add(new TicketDetails(1,"Chennai","Mumbai","12345","700"));
        tickets.add(new TicketDetails(2,"Delhi","Mumbai","34523","1700"));
        tickets.add(new TicketDetails(3,"Chennai","Pune","23456","900"));
    }
    public List<TicketDetails> findAll(){
        return tickets;
    }
    public TicketDetails addNewTicket(TicketDetails ticket){
        ticket.setId(++ticketCount);
        tickets.add(ticket);
        return ticket;
    }

    @Autowired
    private TicketService ticketInfo;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/ticketDetails")
    public List<TicketDetails>  retrieveAllTicketDetails(){
        System.out.println("ticket details ");
        return ticketInfo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/ticket",consumes ={MediaType.APPLICATION_JSON_VALUE})

    public ResponseEntity<Object> generateTickets(@RequestBody TicketDetails ticket){
        System.out.println("ticket details ");
        TicketDetails newTicket = ticketInfo.addNewTicket(ticket);
        System.out.println("ticket details send to local host:300");
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newTicket.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
}
