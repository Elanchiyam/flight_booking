package com.FlightBookingSystem.SearchFlights;

public class SearchFlightDetails {
    private String from;
    private String to;
    private String depart;
    private String classType;
    private String adultCount;
    private String childCount;

    public SearchFlightDetails(String from, String to, String depart, String classType, String adultCount, String childCount) {
        this.from = from;
        this.to = to;
        this.depart = depart;
        this.classType = classType;
        this.adultCount = adultCount;
        this.childCount = childCount;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getDepart() {
        return depart;
    }

    public void setDepart(String depart) {
        this.depart = depart;
    }

    public String getClassType() {
        return classType;
    }

    public void setClassType(String classType) {
        this.classType = classType;
    }

    public String getAdultCount() {
        return adultCount;
    }

    public void setAdultCount(String adultCount) {
        this.adultCount = adultCount;
    }

    public String getChildCount() {
        return childCount;
    }

    public void setChildCount(String childCount) {
        this.childCount = childCount;
    }

    @Override
    public String toString() {
        return "SearchFlightDetails{" +
                "from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", depart='" + depart + '\'' +
                ", classType='" + classType + '\'' +
                ", adultCount='" + adultCount + '\'' +
                ", childCount='" + childCount + '\'' +
                '}';
    }
}
