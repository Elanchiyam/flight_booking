import React ,{Component} from 'react';
import Axios from "axios";

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
       // event.preventDefault();

        
        Axios.post('http://localhost:8092/auth',{
                        username:this.state.username,
                        email:this.state.email,
                        password:this.state.password
                    }).then(res => {
                            console.log(res)
                        })
                .catch(error =>{
                    console.log(error)
                    alert("User Name /Email Exist ! Try something new!!!");
                   
                })
        
        
            }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = "text" placeholder = "Username" name="username" value = {this.state.changeHandler} onChange = {this.changeHandler}/> 
                    <input type = "text" placeholder = "Email" name = "email" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                    <input type = "text" placeholder = "Password" name = "password" value = {this.state.changeHandler} onChange = {this.changeHandler} />
                    <button type = "submit" >Submit</button>
                </form>
                <button type = "submit" onClick = {this.display}>Test</button>
                
            </div>
        );
    }
}
export default Registration;