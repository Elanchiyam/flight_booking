import React,{Component} from 'react';
import index from '../styles/IndexStyle.module.css';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {faUserCircle}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DashBoard extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            username : this.props.location.state.username,
            password : this.props.location.state.password
        }

    }
    
    
    render(){
         return(
            <div className={index.mainContainer}>
                <div className={index.header}>
                 <FontAwesomeIcon icon = {faUserCircle} size = "2x" /> <h2> Welcome {this.state.username}</h2>
                </div>
                <div className={index.section}>
                    <div className={index.menus}>
                        <Link className="link">View TicketHistory</Link>
                        <Link to = {
                                    { pathname  : '/search',
                                    }
                                    
                        }>SearchFlight</Link>
                        <Link>Logout</Link>
                    </div>
                    <div className={index.sideContent}>
                        <div className="side-box">
                            hai
                        </div>
                    </div>
                    
                </div>
            
            </div>
        )
    }
}
export default DashBoard;