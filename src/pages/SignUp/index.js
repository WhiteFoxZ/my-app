import { useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import React from 'react';
import { MyContext } from '../../App';

import patern from '../../assets/images/pattern.webp';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import googlelogo from '../../assets/images/googlelogo.png';

import { FaUserCircle } from 'react-icons/fa';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SignUp = () => {
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(true);

    const context = React.useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHearder(true);
    }, []);

    return (
        <>
            <img src={patern} className="loginPatern" />

            <section className="loginSection signUpSection">
                <div className="row">
                    <div className="col-md-8 d-flex align-items-center flex-column">
                        <h1>Best ux/ui fashion ecommerce dashboard & admin panel</h1>
                        <p>
                            Elit Iusto dolore libero recusandae dolor dolores explicabo ullam cum facilis aperiam alias odio quam excepturi molestiae
                            omnis inventore. Repudiandae officia placeat amet consectetur dicta dolorem quo
                        </p>
                        <Button className="btn-blue btn-lg w-100 btn-big ">go to home</Button>
                    </div>
                    <div className="col-md-4">
                        <div className="loginBox">
                            <div className="logo text-center">
                                <img src={Logo} width="60px" />
                                <h5 className="font-weight-bold">Register a new account</h5>
                            </div>

                            <div className="wrapper mt-3 card border">
                                <form>
                                    <div className={`form-group mb-4 position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className="icon">
                                            <FaUserCircle />
                                        </span>
                                        <input
                                            type="input"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            onFocus={() => setInputIndex(0)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                    </div>

                                    <div className={`form-group mb-4 position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className="icon">
                                            <MdEmail />
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            onFocus={() => setInputIndex(1)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 2 && 'focus'}`}>
                                        <span className="icon">
                                            <RiLockPasswordFill />
                                        </span>
                                        <input
                                            type={`${isShowPassword === true ? 'password' : 'text'}`}
                                            className="form-control"
                                            placeholder="Enter your password"
                                            onFocus={() => setInputIndex(2)}
                                            onBlur={() => setInputIndex(null)}
                                        />

                                        <span
                                            className="toggleShowPassword"
                                            onClick={() => {
                                                setIsShowPassword(!isShowPassword);
                                            }}
                                        >
                                            {isShowPassword === true ? <IoMdEye /> : <IoMdEyeOff />}
                                        </span>
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 3 && 'focus'}`}>
                                        <span className="icon">
                                            <RiLockPasswordFill />
                                        </span>
                                        <input
                                            type={`${isShowPassword === true ? 'password' : 'text'}`}
                                            className="form-control"
                                            placeholder="confirm your password"
                                            onFocus={() => setInputIndex(3)}
                                            onBlur={() => setInputIndex(null)}
                                        />

                                        <span
                                            className="toggleShowPassword"
                                            onClick={() => {
                                                setIsShowPassword(!isShowPassword);
                                            }}
                                        >
                                            {isShowPassword === true ? <IoMdEye /> : <IoMdEyeOff />}
                                        </span>
                                    </div>

                                    <FormControlLabel control={<Checkbox />} label="I agree to the all Terms & Condiotions" />

                                    <div className="form-group">
                                        <Button className="btn-blue btn-lg w-100 btn-big ">Sign In</Button>
                                    </div>

                                    <div className="form-group text-center">
                                        <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                                            <span className="line"></span>
                                            <span className="txt">or</span>
                                            <span className="line"></span>
                                        </div>

                                        <Button variant="outlined" className="w-100 btn-lg btn-big loginWithGoogle">
                                            <img src={googlelogo} width="25px" />
                                            &nbsp; Sign In with Google
                                        </Button>
                                    </div>
                                </form>

                                <span className="text-center d-block">
                                    Don't have an account?
                                    <Link to={'/login'} className="link color ms-2">
                                        Sign In
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;
