import React ,{Component}from 'react';
import '../styles/TicketHistory.css';
import Axios from 'axios';


class TicketHistory extends Component{
    constructor(props){
        super(props);
        this.state = {
            select : true,
            tickets:[],
            username : this.props.location.state.username
        }
        this.selectTicket = this.selectTicket.bind(this);
    }
    selectTicket(){
        this.setState({
            select:!this.state.select
        })
    }
    getTicketData(){
        console.log("ticket history------>"+this.state.username);
        Axios.get('http://localhost:8092/viewTicketHistory',{
            params:{
                userName:this.state.username,
                
            },
            headers: {
                'Access-Control-Allow-Origin': true,
                "Content-Type": "application/json"
              }
        })
            .then(res =>{
                const ticket = res.data;
                console.log(ticket);
                console.log("====================");
                console.log(ticket.length);
                 console.log("*********");
                 console.log(ticket[0].ticketHistoryDetails.pnrNo);
                
                const tic =  ticket.map((ticket,index) =>(
                    <div key = {index} className = {this.state.select ? "ticket" :"selected-ticket"} onClick = {this.selectTicket}>
                        <table>
                            <tbody>
                            <tr>
                                <th>From</th>
                                <td>{ticket.ticketHistoryDetails.from}</td>
                            </tr>
                            <tr>
                                <th>To</th>
                                <td>{ticket.ticketHistoryDetails.to}</td>
                            </tr>
                            <tr>
                                <th>PNR</th>
                                <td>{ticket.ticketHistoryDetails.pnrNo}</td>
                            </tr>
                            <tr>
                                <th>Airline</th>
                                <td>{ticket.ticketHistoryDetails.airline}</td>
                            </tr> 
                            <tr>
                                <th>Aircraft Code</th>
                                <td>{ticket.ticketHistoryDetails.aircraft}</td>
                            </tr> 
                            <tr>
                                <th>Date</th>
                                <td>{ticket.ticketHistoryDetails.date}</td>
                            </tr> 
                            <tr>
                                <th>No of Tickets</th>
                                <td>{ticket.ticketHistoryDetails.ticketCount}</td>
                            </tr> 
                            <tr>
                                <th>Total Fare</th>
                                <td>{ticket.ticketHistoryDetails.fare}</td>
                            </tr> 
                            </tbody>                               
                        </table>
                    </div>
                ))
                this.setState({
                    tic
                })
            }).catch(error =>{
                console.log(error)
                alert("Nothing available");
               
            })
    
    }
    componentDidMount(){
        this.getTicketData()
    }
    render(){
        return(
            <div>
                <div className = "main-content">
                    {this.state.tic}
                    
                </div>
                <button onClick = {this.props.history.goBack} >Home Page</button>
            </div>
        );
    }
}
export default TicketHistory;