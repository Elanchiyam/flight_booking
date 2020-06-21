package com.FlightBookingSystem.Authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class AuthenticationController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login")
    public String retrieveUserDetails(
            @ModelAttribute("username") UserDetails user,
            BindingResult result, ModelMap model
            ){

//            model.addAttribute("username",user.getUserName());
//            model.addAttribute("password",user.getPassword());

        String sql = "SELECT username, password FROM User WHERE username = ? AND password = ?";

        System.out.println(user.getUserName() + user.getPassword());
        try {
            UserDetails list = jdbcTemplate.queryForObject(sql, new Object[]{user.getUserName(), user.getPassword()}, (rs, rowNum) ->
                    new UserDetails(
                            rs.getString(1),
                            rs.getString(2)
                    ));
            if (list.getUserName() != null && list.getPassword() != null) {
                System.out.println("username :" + list.getUserName() + "Successfully Looged in");
                return "Successfully Looged in";
            }
            else {
                throw new EmptyResultDataAccessException("username :"+user.getUserName());
            }
        }
        catch(Exception e){
            System.out.println("Service interrupted" + e.toString());

            return "Service interrupted" + e.toString();
        }

    }
}
