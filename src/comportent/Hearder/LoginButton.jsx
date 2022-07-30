import React from 'react';
import {Button} from "antd";
import "./LoginButton.css";

const LoginButton = () => {
    return (
        <div>
            <Button type="submit" className="Login_button">Login</Button>
        </div>
    );
};

export default LoginButton;