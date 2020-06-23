package com.FlightBookingSystem.FlightInventory.AdminFlightService;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;


import java.util.Date;

@Document(collection = "flightInventoryDetails")
public class AdminFlightInfo {



    private String airline;
    @Id
    private String aircraftCode;
    private String from;
    private String to;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date date;
    private Integer fare;
    private Integer totalSeats;
    private Integer reservedSeats;
    private Integer availableSeats;

    public AdminFlightInfo(String airline, String aircraftCode, String from, String to, Date date, Integer fare, Integer totalSeats, Integer reservedSeats,Integer availableSeats) {
        this.airline = airline;
        this.aircraftCode = aircraftCode;
        this.from = from;
        this.to = to;
        this.date = date;
        this.fare = fare;
        this.totalSeats = totalSeats;
        this.reservedSeats = reservedSeats;
        this.availableSeats = availableSeats;
    }

    public String getAircraftCode() {
        return aircraftCode;
    }

    public void setAircraftCode(String aircraftCode) {
        this.aircraftCode = aircraftCode;
    }

    public Integer getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(Integer availableSeats) {
        this.availableSeats = availableSeats;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
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

    public Integer getFare() {
        return fare;
    }

    public void setFare(Integer fare) {
        this.fare = fare;
    }

    public Integer getTotalSeats() {
        return totalSeats;
    }

    public void setTotalSeats(Integer totalSeats) {
        this.totalSeats = totalSeats;
    }

    public Integer getReservedSeats() {
        return reservedSeats;
    }

    public void setReservedSeats(Integer reservedSeats) {
        this.reservedSeats = reservedSeats;
    }

    @Override
    public String toString() {
        return "AdminFlightInfo{" +
                "airline='" + airline + '\'' +
                ", aircraftCode='" + aircraftCode + '\'' +
                ", from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", date=" + date +
                ", fare=" + fare +
                ", totalSeats=" + totalSeats +
                ", reservedSeats=" + reservedSeats +
                ", availableSeats=" + availableSeats +
                '}';
    }
}
