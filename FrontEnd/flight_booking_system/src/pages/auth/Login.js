import React ,{Component} from 'react';
import Axios from "axios";
import '../styles/LoginStyle.css';



class Login extends Component{
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            username:'',
            password:''
        }
      
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
        console.log(username,password);

        event.preventDefault();

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
            // alert("Successfully Logged in");
            
        }).catch(function (error){
            console.log(error);
        });
        
    }
    render(){

        return(
            <div className = "main-container">
                <div className = "content-container">
                    <div className = "left-content">img</div>
                    <div className = "right-content">
                        <div className = "heading">
                            <h1>Login</h1>
                        </div>

                        <div>
                            <form className = "form-group" onSubmit = {this.handleSubmit}>
                                <input type = "text" name="username" placeholder = "Username" value = {this.state.Username} onChange = {this.changeHandler}/>
                                <input type = "text" name = "password" placeholder = "Password" value = {this.state.Password} onChange = {this.changeHandler} />
                                <button className = ""type = "submit" >submit</button>
                            </form> 
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;