/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/Firebase.config";
import { useState } from "react";

const Register = () => {

    const [registerError, setRegisterError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // set register error 
        setRegisterError('')

        // create user

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })

    }

    return (
        <div className="text-center ">


            <div className="text-center  mt-10">
                <form onSubmit={handleSubmit} >
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" id="" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-success" type="submit" value="Register" />
                                    </div>
                                    {
                                        registerError && <p>{registerError}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </form>


            </div>



        </div>
    );
};

export default Register;