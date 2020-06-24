package com.FlightBookingSystem.Authentication;

import com.FlightBookingSystem.Authent;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserDetails,String> {

//    @Query("SELECT email FROM  User  WHERE User.username=(:username) ")
//    public String getUserEmail(String username);


}
