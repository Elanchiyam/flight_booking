package com.FlightBookingSystem.BookTicket;

public class SelectedFlightDetails {
    private String id;
    private String count;
    private String totalfare;

    public SelectedFlightDetails(String id, String count, String totalfare) {
        this.id = id;
        this.count = count;
        this.totalfare = totalfare;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }

    public String getTotalfare() {
        return totalfare;
    }

    public void setTotalfare(String totalfare) {
        this.totalfare = totalfare;
    }

    @Override
    public String toString() {
        return "SelectedFlightDetails{" +
                "id='" + id + '\'' +
                ", count='" + count + '\'' +
                ", totalfare='" + totalfare + '\'' +
                '}';
    }
}
