import {Button, Layout} from "antd";
import "./Header.css"
import React from 'react';
import 'antd/dist/antd.css';
const { Header} = Layout;

const Navbar = () => {
        return (
            <Layout className="header_Wrapper">
                <Header >
                    <span className="Web_Icon">ATools<span className="Web_Icon_dot">.</span></span>
                    <Button type="submit" className="free_trail_Button">start Free Trial</Button>
                    <Button type="submit" className="Login_button">Login</Button>
                </Header>
            </Layout>
        )
    }
;

export default Navbar;