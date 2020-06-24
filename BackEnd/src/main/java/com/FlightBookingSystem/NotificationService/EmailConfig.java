package com.FlightBookingSystem.NotificationService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;

@Configuration
public class EmailConfig {
    @Bean
    public SimpleMailMessage emailTemplate(){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("elanchiyama.17cse@kongu.edu");
        message.setFrom("elanchiyam1322000@gmail.com");
        message.setSubject("Flight Ticket ");
        message.setText("Your Ticket ");
        return message;
    }
}
