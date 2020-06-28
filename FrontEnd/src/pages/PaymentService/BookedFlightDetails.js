import React  from 'react';
import styles from '../styles/BookedFlightStyle.module.css'
import DashBoard from '../DashBoard/index';


function BookedFlightDetails(props){
   
    
    const {username , isSelected,flights,ticketCount,totalfare} = props
    console.log("Inside Booking Component "+username+isSelected+flights.aircraftCode + " --"+ticketCount+ " -->"+totalfare);

   if(isSelected){
    console.log("In selected flight:"+isSelected)
    console.log("In selected flight:"+ flights.aircraftCode);
        return(
            <div>
                <h1>Selected Flights</h1>
                <div className={styles.mainContainer}> 
                
                <h2>Air Asia {flights.ticketCount} </h2>
                <h2>Air No {flights.aircraftCode} </h2>
                <h3>From {flights.from}</h3>
                <h3>To {flights.to}</h3>
                <h3>Departure {flights.date}</h3>
                <h3>No of Tickets {flights.ticketCount}</h3>
                <h3>Fare {flights.fare}</h3>
                <h3>Total fare {flights.totalfare}</h3>
                <button onClick = {()=>props._onButtonClick(isSelected,props.flights,props.ticketCount,props.ticketCount * props.flights.fare)}>Continue to proceed</button> 
            </div> 
            </div>
        )
    }
    else{
        return <DashBoard/>
    }
}

export default BookedFlightDetails;