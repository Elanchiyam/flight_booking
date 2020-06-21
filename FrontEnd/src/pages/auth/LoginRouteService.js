import React from 'react';


export const LogoutHandler = () =>{
    return (
        <div>
             <h1>Logging Out!!</h1>
        </div>
    )
};
export const ProtectedHandler = () =>{
    return (
        <div>
            <Link to = "/logout">Logout Here</Link>
        </div>
    )
};