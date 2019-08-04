import React from 'react'
import { connect } from 'react-redux';
import { login } from '../actions';
import { Button, Input, Form, Icon } from 'antd';

 class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    render() { 
        return (
        <Form layout="inline" onSubmit={login}>
            <Form.Item>
                <Input 
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                name="username" 
                placeholder="Username" 
                onChange={event => this.onChange(event)} 
                value={this.state.email} />
            </Form.Item>
            <Form.Item>
                <Input 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                name="password" 
                type="password" 
                placeholder="Password" 
                onChange={event => this.onChange(event)} value={this.state.password} />
            </Form.Item>
            <Form.Item>
                <Button type="Primary">Login</Button>
            </Form.Item>
        </Form>
    )}
}



const mapStateToProps = state => {
    return { state }
}


export default connect(mapStateToProps, { login })(Login)
