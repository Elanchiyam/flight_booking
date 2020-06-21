package com.FlightBookingSystem.FlightInventory;

import java.util.Date;
import java.util.List;

public interface FlightInfoService {
    List<FlightInfo> findAll();
    List<FlightInfo> findByfrom(String from);
    public List<FlightInfo> findByDate(String from,String to,Date date);
    List<FlightInfo> findByfare(Integer fare);

}
