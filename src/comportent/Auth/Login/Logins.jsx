import {Checkbox, Form, Input} from 'antd';
import React, {useState} from 'react';
import "./Login.css"
import LoginHeading from "./Loginheading";
import FormButton from "./FormButton";


const Logins = () => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const EmailHandler = (e) => {
        let data = {email: Email, password: Password}
        setEmail(e.target.value)
        console.log(Email);
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((reps) => {
                console.log(reps)
            })
        })
    }

    return (
        <div className="FormWrapper">
            <LoginHeading/>
            <Form
                name="basic"
                initialValues={{remember: true}}
                autoComplete="off"

            >
                <Form.Item
                    name="Email address"
                    className="Form_input"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={Email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password value={Password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item onClick={EmailHandler}>
                    <FormButton/>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" className="Form_CheckBox">
                    <Checkbox className="Form_CheckBox">Remember me</Checkbox>
                    <a  className="Forget_pass" style={{}} href="">
                        Forgot password
                    </a>
                </Form.Item>
            </Form>
        </div>

    );
};


export default Logins;
