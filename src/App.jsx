import React from 'react';
import Navbar from "./comportent/Hearder/Navbar";
import Logins from "./comportent/Auth/Login/Logins";
import "./App.css"
import { Col, Row } from 'antd';

const App = () => {
        return (
            <Row>
                <Col span={24}>
                    <div>
                        <Navbar/>
                    </div>
                </Col>

            </Row>
        )
    }
;

export default App;