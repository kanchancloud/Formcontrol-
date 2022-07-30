import {Layout} from "antd";
import "./Navbar.css"
import React from 'react';
import 'antd/dist/antd.css';
import TrailButton from "./Button";
import LoginButton from "./LoginButton";
import Image from "./Image";
import Logins from "../Auth/Login/Logins";

const {Header} = Layout;

const Navbar = () => {
        return (
            <div className="navWrapper">
                <Header className="header_Wrapper" style={{backgroundColor: "white"}}>
                    <span className="Web_Icon">ATools<span className="Web_Icon_dot">.</span></span>
                    <div className="ButtonWrap">
                        <TrailButton/>
                        <LoginButton/>
                    </div>
                </Header>

                <div className="ImageWrapper">
                    <div className="login_form">
                        <Logins/>
                    </div>
                    <div>
                        <Image/>
                    </div>
                </div>
            </div>
        )
    }
;

export default Navbar;