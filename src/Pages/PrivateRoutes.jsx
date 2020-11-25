import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../Context/UserContextProvider';

export const PrivateRoute = ({Component, ...rest}) => {
    return (
        <UserContext.Consumer>
            {({isAuth}) => {
                return isAuth ? (
                    <Route {...rest} render = {(props) => <Component {...props}></Component>}></Route>
                ) : (
                    <Redirect to = "/signin"></Redirect>
                )
            }}
        </UserContext.Consumer>
    )
}