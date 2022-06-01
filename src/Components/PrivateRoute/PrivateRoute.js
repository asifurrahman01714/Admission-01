import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { UserContext } from '../../App';

function PrivateRoute({ children, ...rest }) {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.name ? (
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
}

export default PrivateRoute;