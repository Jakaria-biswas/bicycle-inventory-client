import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import CurrentUser from '../Hooks/CurrentUser';

const RequireAuth = ({children}) => {

     const [getUser] = CurrentUser();
     let location = useLocation()
     if(!getUser){
         return <Navigate to="/login" state={{from:location}} replace></Navigate>
     }


    return (
        children
    );
};

export default RequireAuth;