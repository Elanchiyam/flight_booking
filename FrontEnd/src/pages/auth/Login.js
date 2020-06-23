import React ,{Component} from 'react';
import Axios from "axios";
import styles from'../styles/LoginStyle.module.css';
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationSystem from 'react-notification-system';
import {  Button } from "react-bootstrap";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
export  class MyComponent extends Component{
    notificationSystem = React.createRef();
    
    addNotification = event =>{
        event.preventDefault();
        const notification = this.notificationSystem.current;
        notification.addNotification({
            title:<span data-notify="icon" className="pe-7s-gift"/>,
            message:(
                <div>
                    Welcome User <b> developed by Elanchiyam</b> - flight booking system
                    <br/>
                    <a href = "https://github.com/Elanchiyam/flight_booking" >
                    <FontAwesomeIcon icon = {faGithub} fixedWidth/>
                   </a>
                    
                </div>
            ),
            level: "info",
            position: "tr",
            autoDismiss: 15
        });

    }

    render(){
        return(
            <div>
            
            <Button variant = "secondary" className = "float-right"onClick = {this.addNotification}>site info</Button>
            <NotificationSystem ref = {this.notificationSystem}/>
             </div>
        );
    }
}


export default class Login extends Component{
    constructor(props){
        super(props);
        
       
        this.state = {
            username:'',
            password:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleTest = this.handleTest.bind(this);
    }


    

    changeHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value,
            user : this.state.username
        });
    }

    handleSubmit = async (event)=>{
        console.log("Form Submitted");
        
        const username = this.state.username;
        const password = this.state.password;
        

        event.preventDefault();
        var that = this;
        Axios.get('http://localhost:8092/login',{
            params:{
                username:this.state.username,
                password:this.state.password
            },
            headers: {
                'Access-Control-Allow-Origin': true,
                
            }
        }).then(function (res){
            console.log(res.data); 
           // if(res.status == 200){
               // alert("Successfully Logged in");
                // window.location = `/dashboard?username=${username}&password=${password}`;
                that.props.history.push({
                    pathname: "/dashboard",
                    state:{
                        username:that.state.username,
                        // password:password
                    }
                })
            //}
            
        }).catch(function (error){
         //   console.log(error);
            alert("Please Register!!");
        });
        
    }
    
    handleTest = (event)=>{
       event.preventDefault();

        Axios.post('http://localhost:8092/flightAdmin',{
            
                airline:"Indigo",
                aircraftCode:"5RT8EF",
                from:"Mumbai",
                to:"Calcutta",
                date:"2020-06-25",
                fare:2750,
                totalSeats:100,
                reservedSeats:15,
                

            
            
            }).then(res => {
                    console.log(res);
                    
                })
        .catch(error =>{
            console.log(error)
            alert("Something wrong in post");
        
        })
    }


    render(){

        return(
            <div className = {styles.mainContainer} >
             <div className = {styles.notifi}>{React.createElement(MyComponent)}</div>
            <div className = {styles.contentContainer}>
                <div className = {styles.leftContent}>
                    <div className = {styles.logo}>
                        <span className={styles.faAndroid} >
                        <FontAwesomeIcon icon = {faFighterJet} fixedWidth/>
                        </span>

                    </div>
                    <h3>Welcome!</h3>

                </div>
                <div className = {styles.rightContent}>
                    <div className = {styles.heading}>
                        <h1>Flight Booking System</h1>
                    </div>

                    <div>
                        <form className = {styles.formGroup} onSubmit = {this.handleSubmit}>
                            <input required type = "text" name="username" placeholder = "Username" value = {this.state.Username} onChange = {this.changeHandler}/>
                            <input required  type = "password" name = "password" placeholder = "Password" value = {this.state.Password} onChange = {this.changeHandler} />
                            <div className={styles.btnMargin}>
                            
                                    <button className = {styles.btn}type = "submit" >Submit</button>
                                    
                                    <div className={styles.regLink}>
                                        <p>Don't have an account? <a href="/registration">Register Here</a></p>
                                    </div>

                                {/* <button className = {styles.btn}type = "submit" onClick = {this.handleTest} >Test</button> */}
                            </div>
                        </form> 
                    </div> 
                
                </div>
            </div>
           
        </div>
        );
    }
}
