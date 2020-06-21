package com.FlightBookingSystem.NotificationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationRouteController {

    @Autowired
    EmailService emailService;

    @GetMapping("/sendMail")
    public String sendEmailNotification(){
        System.out.println("Inside Send Mail=====================================>");
        emailService.sendMail("elanchiyama.17cse@kongu.edu","Flight Ticket","Your Ticket");
        System.out.println("After send mail");
        return "Successfully Sent";
    }
}
