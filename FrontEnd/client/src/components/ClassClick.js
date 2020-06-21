import React,{Component} from 'react';

class ClassClick extends Component{
    classHandler(){
        console.log("Class Button Clicked");
    }

    render(){
        return(
            <div>
                <button onClick = {this.classHandler}>Click Class Button</button>
            </div>
        )
    }
}
export default ClassClick;