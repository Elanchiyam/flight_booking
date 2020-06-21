package com.FlightBookingSystem.SearchFlights;

public class TestFlightDetails {
    private String airline;
    private String aircraft;
    private String travel_time;
    private String fare;

    public TestFlightDetails(String airline, String aircraft, String travel_time, String fare) {
        this.airline = airline;
        this.aircraft = aircraft;
        this.travel_time = travel_time;
        this.fare = fare;
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

    public String getTravel_time() {
        return travel_time;
    }

    public void setTravel_time(String travel_time) {
        this.travel_time = travel_time;
    }

    public String getFare() {
        return fare;
    }

    public void setFare(String fare) {
        this.fare = fare;
    }

    @Override
    public String toString() {
        return "TestFlightDetails{" +
                "airline='" + airline + '\'' +
                ", aircraft='" + aircraft + '\'' +
                ", travel_time='" + travel_time + '\'' +
                ", fare='" + fare + '\'' +
                '}';
    }
}
