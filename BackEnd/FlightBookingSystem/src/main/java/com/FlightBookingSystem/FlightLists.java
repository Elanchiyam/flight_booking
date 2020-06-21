package com.FlightBookingSystem;


import java.util.ArrayList;

class seat_info{
    String seat_no;
    String status;
    public seat_info(String seat_no, String status) {
        this.seat_no = seat_no;
        this.status = status;
    }
}

public class FlightLists {
    private final String flight_number;
    private final String airline;
    private final String seat_availability;
    // ArrayList<seat_info> seat_list;

    public FlightLists(String flight_number, String airline, String seat_availability) {
//    public FlightLists(String flight_number, String airline, String seat_availability, ArrayList<seat_info> seat_list) {

        this.flight_number = flight_number;
        this.airline = airline;
        this.seat_availability = seat_availability;
        //this.seat_list = seat_list;
    }

    @Override
    public String toString() {
        return "flight_number : "+ flight_number + "airline :" +airline +"seat_availability :" +  seat_availability ;
    }
}
