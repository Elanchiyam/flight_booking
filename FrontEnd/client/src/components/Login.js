import React,{Component} from 'react';
import Axios from "axios";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name:'',
            price: ''
        }
    }
    render(){
        return(
            <div>
                    <div>
                        <h1>ITEMS</h1>
                        <div> Items -> 
                                {this.state.id}  {this.state.name}  {this.state.price}
                        </div>
                    </div>
                    <button onClick = {() => this.display()}>DISPLAY</button>
                </div>
        );
    }
    display(){
        Axios.get('http://localhost:8091/getproduct').then(res =>{
        this.setState({
            id : res.data.id,
            name:res.data.name,
            price:res.data.price
        })    
        console.log(res.data);
        })
    }
    
    
}
export default Login;