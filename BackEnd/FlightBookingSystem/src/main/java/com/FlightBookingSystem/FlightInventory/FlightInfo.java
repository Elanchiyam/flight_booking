package com.FlightBookingSystem.FlightInventory;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "flightDetails")
public class FlightInfo {
    @Id
    private String id;
    private String airline;
    private String aircraft;
    private String from;
    private String to;
    private String date;
    private String fare;

    public FlightInfo(String airline, String aircraft, String from, String to, String date, String fare) {
        this.airline = airline;
        this.aircraft = aircraft;
        this.from = from;
        this.to = to;
        this.date = date;
        this.fare = fare;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getFare() {
        return fare;
    }

    public void setFare(String fare) {
        this.fare = fare;
    }

    @Override
    public String toString() {
        return "FlightInfo{" +
                "id='" + id + '\'' +
                ", airline='" + airline + '\'' +
                ", aircraft='" + aircraft + '\'' +
                ", from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", date='" + date + '\'' +
                ", fare='" + fare + '\'' +
                '}';
    }
}
