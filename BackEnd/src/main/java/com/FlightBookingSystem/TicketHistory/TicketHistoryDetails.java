package com.FlightBookingSystem.TicketHistory;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="TicketHistory")
public class TicketHistoryDetails {

    private  String userName;
    private TicketDetails ticketHistoryDetails;

    public TicketHistoryDetails(String userName, TicketDetails ticketHistoryDetails) {
        this.userName = userName;
        this.ticketHistoryDetails = ticketHistoryDetails;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public TicketDetails getTicketHistoryDetails() {
        return ticketHistoryDetails;
    }

    public void setTicketHistoryDetails(TicketDetails ticketHistoryDetails) {
        this.ticketHistoryDetails = ticketHistoryDetails;
    }

    @Override
    public String toString() {
        return "TicketHistoryDetails{" +
                "userName='" + userName + '\'' +
                ", ticketHistoryDetails=" + ticketHistoryDetails +
                '}';
    }
}
