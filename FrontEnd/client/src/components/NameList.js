import React from 'react';
import Person from './Person';

function NameList(props){
    const persons = [
        {
            id:1,
            name:'Elan',
            age:20
        },
        {
            id:2,
            name:'Nancy',
            age:27
        },
        {
            id:3,
            name:'Aswin',
            age:30
        },
        {
            id:4,
            name:'Mano',
            age:31
        }
    ]
    const nameList = persons.map(person => <Person key = {person.id} person = {person}/>);
    return(
        <div >{nameList}</div>
    )
}

export default NameList;