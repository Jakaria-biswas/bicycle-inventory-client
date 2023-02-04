import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import './Register.css';
import app from '../../firebase.in';

const auth = getAuth(app)


const Register = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleRegister = event => {

        event.preventDefault()
        const from = event.target;

        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name)
        //  const registerData = {email,password }

        if (!(password.length > 6)) {
            return;
        }
        if (!(/(?=.*[0-9])/.test(password))) {
            return;
        }

        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const data = result.user;
                updateName(name)
                navigate("/")
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })



    }


    const updateName = (name) => {

        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
    }

    return (

        <div className='aut-hbg'>
            <div className="box">
                {/* {loading ? <h3>Loading..</h3> : ""} */}
                <h2>Register page</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Your name</label>
                        <input type="text" name="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                        <div id="emailHelp" className="form-text">Password should minimum 6 character. Assert a string has at least one number; </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm ">{loading ? <div class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden" >Loading...</span>
                        </div>
                    </div> : "Register "}</button>

                    <small style={{ marginLeft: "10px" }}><Link to="/"> Go to home page</Link></small>
                </form>
            </div>
        </div>

    );
};

export default Register;