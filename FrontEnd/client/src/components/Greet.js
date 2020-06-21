import React from 'react';

// function Greet(){
//     return <h1>Hello Elan</h1>;
// }

const Greet = (props) =>{
    const {name,lastName,children} = props
    return (
        <div>
            <h1>
                  {name} {lastName}
            </h1>
            {children}
        </div>
    )
} 
export default Greet;