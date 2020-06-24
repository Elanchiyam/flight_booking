import React ,{Component} from 'react';
import Axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from '../styles/RegistrationStyle.module.css';
import { Link } from "react-router-dom";
import AdminForm from '../AdminRegisterService/AdminForm';
class Registration extends Component{
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            username:'',
            email: '',
            password:'',
            user: true,
            admin:false
        }
    
        this._onButtonClick1 = this._onButtonClick1.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
    }

    _onButtonClick1() {
        this.setState({
          user: true,
          admin:false
          
        });
      }

      _onButtonClick2() {
        this.setState({
          user: false,
          admin:true
          
        });
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
                 <h1>SIGN UP</h1>
                    <div className = {styles.choose}>
                        <Row>
                        <Col><button onClick = {this._onButtonClick1} className = {styles.btn}>New User</button>
                        </Col>
                        <Col><button onClick = {this._onButtonClick2}className = {styles.btn}>Flight Admin</button>
                        </Col>
                        </Row>
                    </div>  
                        {this.state.user?
                                <div>
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
                                </div> :
                        null}
                        {this.state.admin?<AdminForm /> : null}

                         
                        
                </div>
                    
            </div>
        );
    }
}
export default Registration;