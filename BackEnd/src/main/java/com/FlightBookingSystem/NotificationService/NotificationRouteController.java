package com.FlightBookingSystem.NotificationService;

import com.FlightBookingSystem.Authentication.AuthenticationController;
import com.FlightBookingSystem.TicketHistory.TicketHistoryDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationRouteController {

    @Autowired
    EmailService emailService;

    @Autowired
    AuthenticationController authenticationController;

    @GetMapping("/sendMail")
    public String sendEmailNotification(String email, TicketHistoryDetails ticketHistoryDetails){
        System.out.println("Inside Send Mail=====================================>");

        String Ticket = ticketHistoryDetails.toString();
        emailService.sendMail(email,"Flight Ticket",ticketHistoryDetails);
        System.out.println("After send mail");
        return "Successfully Sent";
    }


}
