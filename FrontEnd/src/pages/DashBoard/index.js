import React,{Component} from 'react';
import index from '../styles/IndexStyle.module.css';
import {Link} from 'react-router-dom';
import {faUserCircle}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchFlightComponent from '../TicketBooking/SearchFlight';
import HistoryComponent from '../Ticket/TicketHistory';
import BookFlightComponent from '../PaymentService/BookedFlightDetails';
import CreditCardComponent from '../PaymentService/PaymentForm';
class DashBoard extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            username : this.props.location.state.username,
            showSearchComponent: true,
            showHistoryComponent: false,
            bookedFlight: false,
            creditCard: false
            
            // password : this.props.location.state.password
        }

        this._onButtonClick = this._onButtonClick.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
        this._onButtonClick3 = this._onButtonClick3.bind(this);
        this._onButtonClick4 = this._onButtonClick4.bind(this);
    }
    _onButtonClick() {
        this.setState({
          showSearchComponent: !this.state.showSearchComponent,
          showHistoryComponent: false,
            bookedFlight: false,
            creditCard: false
          
        });
      }

    _onButtonClick2() {
        this.setState({
            showHistoryComponent: !this.state.showHistoryComponent,
             showSearchComponent: !this.state.showSearchComponent,
        });
    }
    _onButtonClick3(isSelected,flights,ticketCount,totalFare){
        this.setState({
            bookedFlight: true,
            showSearchComponent:!this.state.showSearchComponent,
            isSelected,
            flights,
            ticketCount,
            totalFare,
        });
        
        console.log("In _onButtonClick3 "+isSelected+flights.aircraftCode + " --"+ticketCount+ " --"+totalFare);
        console.log("-------------------------------------->"+flights.airline);
    }

    _onButtonClick4(isSelected,flights,ticketCount,totalFare) {
        this.setState({
            creditCard:true,
            showSearchComponent: false,
            bookedFlight: false , 

        });
      }
    
    render(){
        let className = 'menu';
        if (this.props.isActive) {
            className += ' menu-active';
          }
         return(
            <div className={index.mainContainer}>
                <div className={index.header}>
                 <FontAwesomeIcon icon = {faUserCircle} size = "2x" /> <h2> Welcome {this.state.username}</h2>
                </div>
                <div className={index.section}>
                    <div className={index.menus}>
                        <Link className="link" onClick={this._onButtonClick2} to = {
                            { pathname  : '/ticket',
                            state:{
                                username:this.state.username,
                                
                            } 
                        }      
                        }
                       

                        >View Ticket History</Link>
                        <Link className = {className}  
                        //   to = {
                        //     { pathname  : '/search',
                        //     state:{
                        //         username:this.state.username,
                                
                        //     } 
                        // }      
                        // } 
                        onClick={this._onButtonClick} 
                        >Search Flight</Link>
                        <Link to = {
                             { pathname  : '/'}
                        }>Logout</Link>
                    </div>
                    <div className={index.sideContent}>
                        <div className="side-box" id = "side-box-content">
                            
                            {this.state.showSearchComponent ?
                                <SearchFlightComponent username = {this.state.username} _onButtonClick = {this._onButtonClick3} /> :
                                null
                                }

                            {this.state.showHistoryComponent ?
                                <HistoryComponent/> :
                                null
                                }
                            {this.state.bookedFlight ?
                            <BookFlightComponent username = {this.state.username} isSelected = {this.state.isSelected} flights = {this.state.flights} ticketCount= {this.state.ticketCount} totalfare = {this.state.totalFare}  _onButtonClick = {this._onButtonClick4} /> :
                                null
                                }
                            {this.state.creditCard ?
                        <CreditCardComponent username = {this.state.username} isSelected = {this.state.isSelected} flights = {this.state.flights} ticketCount= {this.state.ticketCount} totalfare = {this.state.totalFare} /> :
                            null
                            }
                        </div>
                    </div>
                    
                </div>
            
            </div>
        )
    }
}
export default DashBoard;

