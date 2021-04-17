
import React from 'react';
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({children, ...rest}) => {
    
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || {} ;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;