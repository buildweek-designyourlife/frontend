import React from 'react'
import { connect } from 'react-redux';
import { Button, Input, Form, Icon } from 'antd';

const SignUp = (props) => {
    return (
        <Form layout="inline">
            <Form.Item>
                <Input 
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                name="username" 
                placeholder="Username" />
            </Form.Item>
            <Form.Item>
                <Input 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                name="password" 
                placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Button 
                type="primary">Sign Up</Button>
            </Form.Item>
        </Form>
    )
}

const mapStateToProps = state => {
    return { state }
}


export default connect(mapStateToProps)(SignUp)