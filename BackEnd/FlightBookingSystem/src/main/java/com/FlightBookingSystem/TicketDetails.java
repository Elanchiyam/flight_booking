package com.FlightBookingSystem;

public class TicketDetails {
    private Integer id;
    private String from;
    private String to;
    private String pnrNo;
    private String fare;

    public TicketDetails(Integer id, String from, String to, String pnrNo, String fare) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.pnrNo = pnrNo;
        this.fare = fare;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getPnrNo() {
        return pnrNo;
    }

    public void setPnrNo(String pnrNo) {
        this.pnrNo = pnrNo;
    }

    public String getFare() {
        return fare;
    }

    public void setFare(String fare) {
        this.fare = fare;
    }

    @Override
    public String toString() {
        return "from :"+from + "to :"+to + "pnrNo :"+pnrNo + "fare :"+fare;
    }
}
