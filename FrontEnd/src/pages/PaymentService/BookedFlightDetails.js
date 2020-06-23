import React  from 'react';
import styles from '../styles/BookedFlightStyle.module.css'
import DashBoard from '../DashBoard/index';
import { Link } from "react-router-dom";

function BookedFlightDetails(props){
    function test(){
        console.log("inside test");
        props.history.push({
            pathname:"/creditCard",
            state : {   
                isSelected : props.location.state.selected,
                username : props.location.state.username,
                 flightId : props.location.state.id
                    }
        })
        
    }
    function SelectedTicket(props){
        console.log("In selected ticket");
        // const flightId = props.location.state.id;
        // const ticketCount = props.location.state.ticketCount;
        // const totalfare  = props.location.state.totalfare;

    }
    
    
    const isSelected = props.location.state.selected;
    const flightId = props.location.state.aircraft;
    const ticketCount = props.location.state.ticketCount;
    const totalfare = props.location.state.totalfare;
    const username = props.location.state.username;
    console.log('--------------------------------->>>'+username);
   if(isSelected){
    console.log("In selected flight:"+isSelected)
    console.log("In selected flight:"+ flightId);
        return(
            <div>
                <h1></h1>
                <div className={styles.mainContainer}> 
                
                <h2>Air Asia {props.location.state.airline} </h2>
                <h2>Air No {props.location.state.aircraft} </h2>
                <h3>From {props.location.state.from}</h3>
                <h3>To {props.location.state.to}</h3>
                <h3>Departure {props.location.state.date}</h3>
                <h3>No of Tickets {props.location.state.ticketCount}</h3>
                <h3>Fare {props.location.state.fare}</h3>
                <h3>Total fare {props.location.state.totalfare}</h3>
                {/* <button onClick = {()=> props.Creditcard}>Continue to proceed</button> */}
                {/* <button onClick = {test}>Continue to proceed</button>  */}
                <Link to = {
                       { pathname  : '/creditCard',
                        state:{
                            flightId:flightId,
                            ticketCount:ticketCount,
                            totalfare:totalfare,
                            username:username
                        }}
                    
                }>Continue to proceed
                </Link>
            </div> 
            </div>
        )
    }
    else{
        return <DashBoard/>
    }
}

export default BookedFlightDetails;