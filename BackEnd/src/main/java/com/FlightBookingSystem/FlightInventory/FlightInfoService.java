package com.FlightBookingSystem.FlightInventory;

import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightInfo;

import java.util.Date;
import java.util.List;

public interface FlightInfoService {
    List<FlightInfo> findAll();
    List<FlightInfo> findByfrom(String from);
    public List<FlightInfo> findByDate(String from,String to,Date date);
    List<FlightInfo> findByfare(Integer fare);
    public void insert(AdminFlightInfo adminFlightInfo);

}
