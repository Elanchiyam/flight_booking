package com.FlightBookingSystem.TicketHistory;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.UUID;

public class TicketDetails {

    private UUID pnrNo;
    private String from;
    private String to;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date date ;
    private String airline;
    private String aircraft;
    private Integer ticketCount;
    private Integer fare ;
    private Integer seatCount_start;
    private Integer seatCount_end;

    public TicketDetails(UUID pnrNo, String from, String to, Date date, String airline, String aircraft, Integer ticketCount, Integer fare, Integer seatCount_start, Integer seatCount_end) {
        this.pnrNo = pnrNo;
        this.from = from;
        this.to = to;
        this.date = date;
        this.airline = airline;
        this.aircraft = aircraft;
        this.ticketCount = ticketCount;
        this.fare = fare;
        this.seatCount_start = seatCount_start;
        this.seatCount_end = seatCount_end;
    }

    public UUID getPnrNo() {
        return pnrNo;
    }

    public void setPnrNo(UUID pnrNo) {
        this.pnrNo = pnrNo;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getAircraft() {
        return aircraft;
    }

    public void setAircraft(String aircraft) {
        this.aircraft = aircraft;
    }

    public Integer getTicketCount() {
        return ticketCount;
    }

    public void setTicketCount(Integer ticketCount) {
        this.ticketCount = ticketCount;
    }

    public Integer getFare() {
        return fare;
    }

    public void setFare(Integer fare) {
        this.fare = fare;
    }

    public Integer getSeatCount_start() {
        return seatCount_start;
    }

    public void setSeatCount_start(Integer seatCount_start) {
        this.seatCount_start = seatCount_start;
    }

    public Integer getSeatCount_end() {
        return seatCount_end;
    }

    public void setSeatCount_end(Integer seatCount_end) {
        this.seatCount_end = seatCount_end;
    }

    @Override
    public String toString() {
        return "TicketDetails{" +
                "pnrNo=" + pnrNo +
                ", from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", date=" + date +
                ", airline='" + airline + '\'' +
                ", aircraft='" + aircraft + '\'' +
                ", ticketCount=" + ticketCount +
                ", fare=" + fare +
                ", seatCount_start=" + seatCount_start +
                ", seatCount_end=" + seatCount_end +
                '}';
    }
}
