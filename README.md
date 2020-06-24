# Flight Booking Web Application  

A simple complete web app with,

FrontEnd - React js <br/>
BackEnd - Spring boot <br/>
DataBase - MySQL, Mongo <br/>

# Feature
- [x] Login Registration
- [x] Dashboard
- [x] Searching Service
- [x] Booking Service
- [x] Ticket Generation
- [x] Notification Service

# Requirements

Design and Implement a Flight Booking System. Requirements below.
1. We need to develop a website for a flight booking system.
2. The system will have n number of flights
3. Each flight will have m number of seats
4. Each flight will have a source and destination place
5. User login system - When the user logs in, he should select the source and destination and then we should show the flights applicable. When the user selects a flight, all free seats should be displayed
6. A user can book a maximum of 6 tickets
7. Ticket generation system
8. Maintain concurrency. Same seats should not be booked by two users
9. Payment module
10. Notification system - SMS or email


# API Documentation
## 
   | Method | url               |
   | ------ | ----------------- |
   | get    | /login            |
   | get    | /viewTicketHistory|
   | post   | /flightAdmin      |
   | post   | /ConfirmTicket    |
   | post   | /auth             |
   | get    | /searchFlightInDB | 

# Screen shots

![Alt text](ScreenShots/login.png?raw=true "Login")
![Alt text](ScreenShots/Dashboard.png?raw=true "DashBoard")
![Alt text](ScreenShots/creditCard.png?raw=true "Payment")
![Alt text](ScreenShots/viewHistory.png?raw=true "Profile")
![Alt text](ScreenShots/mailNotification.png?raw=true "Mail")

 
