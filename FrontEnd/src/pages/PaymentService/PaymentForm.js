import React , {Component} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Axios from 'axios';
import {Link, useLocation} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";

 class PaymentForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
      
    };
    
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  
  // componentDidMount(){
  //     let location = useLocation();
  //     console.log(location);
  //     console.log("In card" +location.isSelected);
  // }
  
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }

  handleSubmit = (event) =>{
    console.log("Payment  Form Submitted");
    const { match, location, history } = this.props
    const {flightId , ticketCount,totalfare,username} = this.props.location.state;
    console.log("->>>>>>>>>>>>>>>>> "+ username)  ;
    event.preventDefault();
    Axios.post('http://localhost:8092/ConfirmTicket',{
          flightId:flightId,
          ticketCount:ticketCount,
          totalfare:totalfare,
          cvc: this.state.cvc,
          expiry: this.state.expiry,
          name: this.state.name,
          number: this.state.number,
          userName:username

        }).then(res => {
                console.log(res)
                alert("Transaction Success "+username);
            })
      .catch(error =>{
        console.log(error)
        alert("Transaction Failed");
      
      })
    
  }
  
  render() {
    // const { match, location, history } = this.props
    // console.log(match.params.id);
    return (
      <div id="PaymentForm">
      {/* <h1>You are at {location.pathname} {this.props.location.state.id} </h1> */}
        
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form onSubmit = {this.handleSubmit}>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="name"
            placeholder="Your Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <input
            type="tel"
            name="expiry"
            placeholder="expiry date"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <button type = "submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default withRouter(PaymentForm);