import React ,{Component}from 'react';
import '../styles/TicketHistory.css';
import Axios from 'axios';


class TicketHistory extends Component{
    constructor(props){
        super(props);
        this.state = {
            select : true,
            tickets:[]
        }
        this.selectTicket = this.selectTicket.bind(this);
    }
    selectTicket(){
        this.setState({
            select:!this.state.select
        })
    }
    getTicketData(){
        Axios.get('http://localhost:8092/ticketDetails',{
            headers: {
                'Access-Control-Allow-Origin': true,
                "Content-Type": "application/json"
              }
        })
            .then(res =>{
                const ticket = res.data;
                console.log(ticket);
                
                const tic =  ticket.map((ticket,index) =>(
                    <div key = {index} className = {this.state.select ? "ticket" :"selected-ticket"} onClick = {this.selectTicket}>
                        <table>
                            <tr>
                                <th>From</th>
                                <td>{ticket.from}</td>
                            </tr>
                            <tr>
                                <th>To</th>
                                <td>{ticket.to}</td>
                            </tr>
                            <tr>
                                <th>PNR</th>
                                <td>{ticket.pnrNo}</td>
                            </tr>
                            <tr>
                                <th>Total Fare</th>
                                <td>{ticket.fare}</td>
                            </tr>                                
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
            </div>
        );
    }
}
export default TicketHistory;