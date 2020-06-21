import React,{Component} from 'react';
import Axios from 'axios';

class Ticket extends Component{
    constructor(props){
        super(props);
        this.state = {
            tickets:[]
        };
    }
    getTicketData(){
        Axios.get('http://localhost:8092/ticket')
            .then(res =>{
                const ticket = res.data;
            }).catch((error)=>{
                console.log(error)
            })
    }
    componentDidMount(){
        this.getUserData()
    }
    render() {
        return(
            <div></div>
        )
    }
}
export default Ticket;