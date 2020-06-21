import React from 'react';

function Inline(){
    const heading ={
        fontSize : '72px',
        color : 'green'
    };
    return(
        <div>
            <h1 style = {heading}>Elanch uh!!</h1>
            {/* <h1 className ='error'>CNM</h1> */}
        </div>
    )
}
export default Inline;