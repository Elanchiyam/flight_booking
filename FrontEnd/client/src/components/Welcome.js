import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        const {name,lastName} = this.props
        return <h1>Hi {this.props.name}, {this.props.lastName}</h1>
    }
}
export default Welcome;