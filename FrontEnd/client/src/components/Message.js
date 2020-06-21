import React, { Component } from 'react';
import Welcome from './Welcome';

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Welcome Elanchiyam'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Welcome Elanchiyam Anantharaman.'
        })
    }

    render(props){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Click me</button>
            </div>
        )
    }
}
export default Message;