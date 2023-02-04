import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import app from '../../firebase.in';
import CurrentUser from '../Hooks/CurrentUser';

const auth = getAuth(app)

const Login = () => {






    const [getUser, setGetUser] = CurrentUser();
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();


     // redirect user after login 

     let location = useLocation();

     const NavigateFrom = location?.state?.from.pathname || '/'




    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;

        const email = from.email.value;
        const password = from.password.value;

        const loginInfo = { email, password }

        /// password validation
        if (!(password.length > 6)) {
            return;
        }
        if (!(/(?=.*[0-9])/.test(password))) {
            return;
        }
        // console.log(loginInfo)
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                const useLoginData = result.user;
                setGetUser(useLoginData)
                navigate(NavigateFrom, {replace:true})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => {
                setLoading(false)
            })





    }
    return (

        <div className='aut-hbg'>
            <div className="box">
                <h2>Login page</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">{loading ? <div class="text-center">
                        <div class="spinner-border"   role="status">
                            <span class="visually-hidden" >Loading...</span>
                        </div>
                    </div> : "Login"}</button>
                    <small style={{ marginLeft: "10px" }}><Link to="/"> Go to home page</Link></small>
                </form>
            </div>
        </div>

    );
};

export default Login;