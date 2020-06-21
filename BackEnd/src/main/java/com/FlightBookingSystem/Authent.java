package com.FlightBookingSystem;

public class Authent {
    private String username;
    private String email;
    private String password;

    public Authent(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    public Authent(){
    }

    @Override
    public String toString() {
        return "User [" + username + ", " + email + ", " +password + "]";
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
