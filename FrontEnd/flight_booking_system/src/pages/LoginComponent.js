import React ,{Component}from 'react';
import './styles/LoginStyle.css';


class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            Username:'',
            Password:''
        }
    }
    usernameHandler = (event) =>{
        this.setState({
            Username: event.target.value
        })
    }
    passwordHandler = (event) =>{
        this.setState({
            Password: event.target.value
        })
    }
    submitHandler = (event ) =>{
        alert(`${this.state.Username} ${this.state.Password}`)
        event.preventDefault();
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
                            <form className = "form-group" onSubmit = {this.submitHandler}>
                                <input type = "text" placeholder = "Username" value = {this.state.Username} onChange = {this.usernameHandler}/>
                                <input type = "text" placeholder = "Password" value = {this.state.Password} onChange = {this.passwordHandler} />
                                <button className = ""type = "submit">submit</button>
                            </form> 
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
} 
export default LoginComponent;