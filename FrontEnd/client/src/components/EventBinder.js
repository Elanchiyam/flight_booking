import React, { Component } from 'react';

class EventBinder extends Component{
    constructor(){
        super();
        this.state = {
            message : 'Hello !'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Good Bye'
    //     })
        
    // }
    clickHandler = () =>(
        this.setState({
            message : 'GoodBye'
        })
    )
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click me :)</button> */}
                {/* <button onClick = {()=> this.clickHandler()}>Click me :)</button> */}
                <button onClick = {this.clickHandler}>Click me :)</button>
            </div>
        )
    }
}
export default EventBinder;