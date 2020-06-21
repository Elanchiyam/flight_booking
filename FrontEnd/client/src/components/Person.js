import React from 'react';
function Person({person}){
    return(
        <div> 
        <h1> 
            I am {person.name} and I am {person.age}
        </h1>
    </div>
    )
}
export default Person;