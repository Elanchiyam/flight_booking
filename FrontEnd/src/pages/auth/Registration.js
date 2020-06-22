import React ,{Component} from 'react';
import Axios from "axios";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import styles from '../styles/RegistrationStyle.module.css';
import { Link } from "react-router-dom";

class Registration extends Component{
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            username:'',
            email: '',
            password:''
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
        console.log("Form Submitted");
        event.preventDefault();

        
        Axios.post('http://localhost:8092/auth',{
                        username:this.state.username,
                        email:this.state.email,
                        password:this.state.password
                    }).then(res => {
                            console.log(res.data);
                            const responseMessage = "Sucessfully Registered!!";
                            this.setState({
                                responseMessage
                            })
                        })
                .catch(error =>{
                    console.log(error)
                    alert("User Name /Email Exist ! Try something new!!!");
                   
                })
        
        
    }
    render(){
        return(
            <div className = {styles.regDiv}>                 
                 <div className = {styles.content}>
                        <h3>Sign up</h3>
                        <Form onSubmit = {this.handleSubmit}>
                            <Form.Group controlId="formBasicUsername">

                                <Form.Control required  type = "text" placeholder = "Username" name="username" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                                <br/>
                                <Form.Control required  type="email" placeholder="Enter email" name = "email" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                                <br/>
                                <Form.Control required  type="password" placeholder="Password"  name = "password" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                        <div>
                            {this.state.responseMessage}
                            <Link to = {
                                    { pathname  : '/',
                                    }
                            }>Back to home page
                            </Link>
                    </div>
                    </div>
                    
            </div>
        );
    }
}
export default Registration;