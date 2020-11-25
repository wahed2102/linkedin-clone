import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { DataContext } from '../Context/DataContextProvider';

export const PrivateRoute = ({Component, ...rest}) => {
    return (
        <DataContext.Consumer>
            {({isAuth}) => {
                return isAuth ? (
                    <Route {...rest} render = {(props) => <Component {...props}></Component>}></Route>
                ) : (
                    <Redirect to = "/signin"></Redirect>
                )
            }}
        </DataContext.Consumer>
    )
}