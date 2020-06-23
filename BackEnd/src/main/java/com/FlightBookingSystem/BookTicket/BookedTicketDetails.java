package com.FlightBookingSystem.BookTicket;



public class BookedTicketDetails {
    private String flightId;
    private Integer ticketCount;
    private String cvc;
    private String expiry;
    private String name;
    private String number;
    private String userName;



    public BookedTicketDetails(String flightId, Integer ticketCount, String cvc, String expiry, String name, String number) {
        this.flightId = flightId;
        this.ticketCount = ticketCount;
        this.cvc = cvc;
        this.expiry = expiry;
        this.name = name;
        this.number = number;
    }
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    public Integer getTicketCount() {
        return ticketCount;
    }

    public void setTicketCount(Integer ticketCount) {
        this.ticketCount = ticketCount;
    }

    public String getCvc() {
        return cvc;
    }

    public void setCvc(String cvc) {
        this.cvc = cvc;
    }

    public String getExpiry() {
        return expiry;
    }

    public void setExpiry(String expiry) {
        this.expiry = expiry;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "BookedTicketDetails{" +
                "flightId='" + flightId + '\'' +
                ", ticketCount=" + ticketCount +
                ", cvc='" + cvc + '\'' +
                ", expiry='" + expiry + '\'' +
                ", name='" + name + '\'' +
                ", number='" + number + '\'' +
                '}';
    }
}