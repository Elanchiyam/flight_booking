import React ,{Component} from 'react';
import Axios from "axios";
import { Form, Button,Col } from "react-bootstrap";
import styles from '../styles/AdminForm.module.css';
import { Link } from "react-router-dom";

class AdminForm extends Component{
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            username:'',
            email: '',
            password:'',
            responseMessage:false
        }
    }
    changeHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    display(){
        Axios.get('http://localhost:8091/').then(res =>{
            console.log(res.data);
        })
    }

    

    handleSubmit = (event)=>{
        event.preventDefault();
         

        Axios.post('http://localhost:8092/flightAdmin',{
            
                airline:this.state.airline,
                aircraftCode:this.state.aircraftCode,
                from:this.state.from,
                to:this.state.to,
                date:this.state.date,
                fare:this.state.fare,
                totalSeats:this.state.totalSeats,
                reservedSeats:this.state.reservedSeats,
                

            
            
            }).then(res => {
                    console.log(res);
                   // const responseMessage = "Sucessfully Registered!!";
                    this.setState({
                        responseMessage : true
                    })
                })
        .catch(error =>{
            console.log(error)
            alert("Something wrong in post");
        
        })
        
    }
    render(){
        
        return(
            // <div className = {styles.regDiv}>                 
                 <div className = {styles.content}>
                 

                        <Form onSubmit = {this.handleSubmit}>
                        <Form.Row>
                            <Col>
                            <Form.Control className = {styles.Contro1} required  type = "text" placeholder = "Airline" name="airline" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Col>
                            <Col>
                            <Form.Control  className = {styles.Contro1}required  type = "text" placeholder = "Aircraft Code" name="aircraftCode" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <Form.Control  className = {styles.Contro1}required  type = "text" placeholder = "From" name="from" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Col>
                            <Col>
                            <Form.Control  className = {styles.Contro1}required  type = "text" placeholder = "To" name="to" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <Form.Control  className = {styles.Contro1}required  type = "date"  name="date" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Col>
                            <Col>
                            <Form.Control  className = {styles.Contro1}required  type = "number" placeholder = "Fare" name="fare" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <Form.Control  className = {styles.Contro1}required  type = "text" placeholder = "Total Seats" name="totalSeats" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Col>
                            <Col>
                            <Form.Control  className = {styles.Contro1}required  type = "text" placeholder = "Reserved Seats" name="reservedSeats" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Col>
                        </Form.Row>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                        <div>
                           
                            <Link to = {
                                    { pathname  : '/',
                                    }
                            }>Back to home page
                            </Link>
                    </div>
                    {this.state.responseMessage}
                    {this.state.responseMessage ?
                            <div><h2>Sucessfully Registered!!</h2></div>:
                                null
                                }
                    </div>
                    
            // </div>
        );
    }
}
export default AdminForm;