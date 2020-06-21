package com.FlightBookingSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController

public class Login {
    @Autowired
    JdbcTemplate jdbcTemplate;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/auth")
    ResponseEntity<?> retrieveUser(@RequestBody Authent newUser){
        System.out.println(newUser.getUsername());
        System.out.println(newUser.getEmail());
        System.out.println(newUser.getPassword());

        String sql = "INSERT INTO User (username, email, password) VALUES (?, ?, ?)";
        try {
            int result = jdbcTemplate.update(sql, newUser.getUsername(),newUser.getEmail(),newUser.getPassword());
            if (result > 0) {
                System.out.println("Insert successfully.");
                return ResponseEntity.noContent().build();
            }
            else{
                System.out.println("Failed insert.");
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        catch(Exception e){
            System.out.println("Insert failed." + e.toString());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/searchflights")
    public void getFlightLists(){

      //  public List<FlightLists> getFlightLists(){
        List<FlightLists> flightLists = new ArrayList<FlightLists>();
    //    ArrayList<seat_info> seats = new ArrayList<seat_info>();
       // seats.add(new seat_info("A1","avail"));
        //seats.add(new seat_info("A2","avail"));
        //seats.add(new seat_info("A3","unavail"));

       // flightLists.add(new FlightLists("ABC", "Indigo","5",seats));
        flightLists.add(new FlightLists("ABC", "Indigo","5"));

        System.out.println(flightLists.toString());
      //  return flightLists;
    }
}
