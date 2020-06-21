import React,{Component} from 'react';
import '../styles/IndexStyle.css';

class DashBoard extends Component{
    
    render(){
        return(
            <div className="main-container">
                <div className="header">
                    Header
                </div>
                <div className="section">
                    <div className="menus">
                        <a>Login</a>
                        <a >Registration</a>
                        <a >View TicketHistory</a>
                        <a >SearchFlight</a>
                        <a >Logout</a>
                    </div>
                    <div className="side-content">
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