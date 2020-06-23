import React,{Component} from 'react';
import index from '../styles/IndexStyle.module.css';
import {Link} from 'react-router-dom';
import {faUserCircle}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchFlightComponent from '../TicketBooking/SearchFlight';
import HistoryComponent from '../Ticket/TicketHistory';
class DashBoard extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            username : this.props.location.state.username,
            showSearchComponent: true,
            showHistoryComponent: false
            // password : this.props.location.state.password
        }

        this._onButtonClick = this._onButtonClick.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
    }
    _onButtonClick() {
        this.setState({
          showSearchComponent: !this.state.showSearchComponent,
          
        });
      }

    _onButtonClick2() {
        this.setState({
            showHistoryComponent: !this.state.showHistoryComponent,
             showSearchComponent: !this.state.showSearchComponent,
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
                                <SearchFlightComponent username = {this.state.username}/> :
                                null
                                }

                            {this.state.showHistoryComponent ?
                                <HistoryComponent/> :
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