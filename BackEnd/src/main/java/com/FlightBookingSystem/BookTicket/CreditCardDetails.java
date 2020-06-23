package com.FlightBookingSystem.BookTicket;

public class CreditCardDetails {
    private String cvc;
    private String expiry;
    private String name;
    private String number;

    public CreditCardDetails(String cvc, String expiry, String name, String number) {
        this.cvc = cvc;
        this.expiry = expiry;
        this.name = name;
        this.number = number;
    }

    public String getCvc() {
        return cvc;
    }

    public void setCvc(String cvc) {
        this.cvc = cvc;
    }

    public String getExpiry() {
        return expiry;
    }

    public void setExpiry(String expiry) {
        this.expiry = expiry;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "CreditCardDetails{" +
                "cvc='" + cvc + '\'' +
                ", expiry='" + expiry + '\'' +
                ", name='" + name + '\'' +
                ", number='" + number + '\'' +
                '}';
    }
}
