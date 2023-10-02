// import { useState } from "react";

import { signInWithEmailAndPassword } from "@firebase/auth";
import auth from "../../firebase/Firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSucces] = useState('')
    const emailReff =useRef(null)

    const handleLogin = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        // set register error 
        setRegisterError('')
        setSucces('')

        // add validetion 

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSucces('Login succesfully')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })

    }

    const handleForget = e => {

        console.log('plaese cheack your email')

    }
    

    return (
        <div >
            <div className="hero min-h-screen bg-green-500">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleLogin}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        ref={emailReff }
                                        
                                        />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a onClick={handleForget} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                            </form>
                            {
                                registerError && <p className="text-green-500 text-2xl font-extrabold">{registerError}</p>
                            }
                            {
                                success && <p className="text-green-500 text-2xl font-extrabold">{success}</p>
                            }
                            <p>new to go register <Link to='/register'> <span className="btn">register</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Login;