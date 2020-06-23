package com.FlightBookingSystem.FlightInventory;

import com.FlightBookingSystem.FlightInventory.AdminFlightService.AdminFlightInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class FlightInfoServiceImplementation implements FlightInfoService{
    @Autowired
    private FlightRepository flightRepository;

    @Override
    public List<FlightInfo> findAll() {
        return flightRepository.findAll();
    }

    @Override
    public List<FlightInfo> findByfrom(String from) {
        return flightRepository.findByfrom(from);
    }

    @Override
    public List<FlightInfo> findByDate(String from,String to,Date date){
        return flightRepository.findByDate(from,to,date);
    }

    @Override
    public List<FlightInfo> findByfare(Integer fare) {
        return flightRepository.findByfare(fare);
    }

    @Override
    public void insert(AdminFlightInfo adminFlightInfo) {

    }


}
