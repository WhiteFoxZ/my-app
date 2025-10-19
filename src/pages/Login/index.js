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

const Login = () => {
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(true);

    const context = React.useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHearder(true);
    }, []);

    return (
        <>
            <img src={patern} className="loginPatern" />

            <section className="loginSection">
                <div className="loginBox">
                    <div className="logo text-center">
                        <img src={Logo} width="60px" />
                        <h5 className="font-weight-bold">Login to Hotash</h5>
                    </div>

                    <div className="wrapper mt-3 card border">
                        <form>
                            <div className={`form-group mb-4 position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className="icon">
                                    <MdEmail />
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    onFocus={() => setInputIndex(0)}
                                    onBlur={() => setInputIndex(null)}
                                />
                            </div>

                            <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className="icon">
                                    <RiLockPasswordFill />
                                </span>
                                <input
                                    type={`${isShowPassword === true ? 'password' : 'text'}`}
                                    className="form-control"
                                    placeholder="Enter password"
                                    onFocus={() => setInputIndex(1)}
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

                            <div className="form-group">
                                <Button className="btn-blue btn-lg w-100 btn-big ">Sign In</Button>
                            </div>

                            <div className="form-group text-center">
                                <Link to={'/forgot-password'} className="link">
                                    FORGOT PASSWORD
                                </Link>

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

                            <div className="wrapper mt-3 card border footer p-2">
                                <span className="text-center">
                                    Don't have an account?
                                    <Link to={'/signUp'} className="link color ms-2">
                                        Register
                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
