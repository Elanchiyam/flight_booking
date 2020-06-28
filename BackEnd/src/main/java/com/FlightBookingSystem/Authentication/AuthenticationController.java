package com.FlightBookingSystem.Authentication;

import com.FlightBookingSystem.Authent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;




@RestController
public class AuthenticationController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login")
//    public String retrieveUserDetails(
//            @ModelAttribute("username") UserDetails user,
//            BindingResult result, ModelMap model
//            ){
    public ResponseEntity<?> retrieveUserDetails(@RequestParam String username, @RequestParam String password ){
        System.out.println(username + password);

//            model.addAttribute("username",user.getUserName());
//            model.addAttribute("password",user.getPassword());

        String sql = "SELECT username, password FROM User WHERE username = ? AND password = ?";
        UserDetails user = new UserDetails(username,password);
        System.out.println(user.getUserName() + user.getPassword());
        try {
            UserDetails list = jdbcTemplate.queryForObject(sql, new Object[]{user.getUserName(), user.getPassword()}, (rs, rowNum) ->
                    new UserDetails(
                            rs.getString(1),
                            rs.getString(2)
                    ));
            if (list.getUserName() != null && list.getPassword() != null) {
                System.out.println("username :" + list.getUserName() + "Successfully Logged in");
                return ResponseEntity.noContent().build();
            }
            else {
                throw new EmptyResultDataAccessException("username :"+user.getUserName());
            }
        }
        catch(Exception e){
            System.out.println("Service interrupted" + e.toString());

            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
//        return "Sucessfully login";
    }


    public String retrieveEmailDetails( String username){
        System.out.println("In Authentication Controller email details " + username );

        String sql = "SELECT email FROM User WHERE username = ?";
        Authent user  = new Authent(username);

        System.out.println("Authent User =================>" + username );
            Authent list = jdbcTemplate.queryForObject(sql, new Object[]{user.getUsername() }, (rs, rowNum) ->
                    new Authent(
                            rs.getString(1)

                    ));
        System.out.println("Authent User Email =================>" + list.toString() );
            if (list.getUsername()!= null ) {
                System.out.println("Notification User Name ------------------->" + list.toString());
                return list.getUsername();
            }
            else {
                throw new EmptyResultDataAccessException("username :"+user.getUsername());
            }

    }

}
