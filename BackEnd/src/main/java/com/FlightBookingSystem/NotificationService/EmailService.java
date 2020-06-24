package com.FlightBookingSystem.NotificationService;

import com.FlightBookingSystem.TicketHistory.TicketHistoryDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service("emailService")
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private SimpleMailMessage preConfiguredMessage;

    public void sendMail(String to, String subject, TicketHistoryDetails ticketHistoryDetails){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("mnoelanchiyam1322000@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        String body = "Hi " + ticketHistoryDetails.getUserName() + "\n"
                + "Your Ticket Details" + "\n"
                +" From :" + ticketHistoryDetails.getTicketHistoryDetails();

        message.setText(body);
        mailSender.send(message);
    }

    public void sendPreConfiguredMail(String message)
    {
        SimpleMailMessage mailMessage = new SimpleMailMessage(preConfiguredMessage);
        mailMessage.setText(message);
        mailSender.send(mailMessage);
    }
}
