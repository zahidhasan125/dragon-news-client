import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

/*
* only allow authenticated user to visit the route
* send location to the children inside state object
* our motive:- after successfully login, redirect the to the wanted page/route 
* receive the location from the children with useLocation(), const from = location?.state?.from?.pathname
* after successfully login, redirect with ***navigate(from, {replace: true})***

* for solving get user after reload/refresh have to set a loading state in AuthProvider
* loading will be true initially, and also for login, createUser, signInWithProvider and signOut
* loading will be false, when onAuthStateChanged got currentUser
* check if loading, then return a Spinner

*/

const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="danger" />
    }
    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }

    return children;
};

export default PrivateRoute;