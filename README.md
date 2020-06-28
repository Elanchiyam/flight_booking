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


# Database Schema

## MySql
  | username | email | password |
  | -------- | ----- | -------- |

## Mongo DB
### Ticket History

{
	"userName": "Elanchiyam",
	"ticketHistoryDetails": {
		"pnrNo": "uEBIr1KJhg/FcfxBGFEviw==",
		"from": "Chennai",
		"to": "Mumbai",
		"date": "2020-06-28T00:00:00Z",
		"airline": "Air Asia",
		"aircraft": "17TY89",
		"ticketCount": 4,
		"fare": 6000
	}
}

### Flight Inventry

{
	"_id": "8YU90T",
	"airline": "Go Air",
	"from": "Bangalore",
	"to": "Delhi",
	"date": "2020-06-28T00:00:00Z",
	"fare": 1000,
	"totalSeats": 100,
	"reservedSeats": 0,
	"availableSeats": 100
} 

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

![Alt text](ScreenShots/blockDiagram.png?raw=true "Block")
![Alt text](ScreenShots/login.png?raw=true "Login")
![Alt text](ScreenShots/Dashboard.png?raw=true "DashBoard")
![Alt text](ScreenShots/creditCard.png?raw=true "Payment")
![Alt text](ScreenShots/viewHistory.png?raw=true "Profile")
![Alt text](ScreenShots/mailNotification.png?raw=true "Mail")

 
