import React from 'react'
import { connect } from 'react-redux';

const Login = (props) => {
    console.log("props", props);
    return (
        <form>
            <input name="username" placeholder="Username" />
            <input name="password" placeholder="Password" />
            <button>Login</button>
        </form>
    )
}

const mapStateToProps = state => {
    return { state }
}


export default connect(mapStateToProps)(Login)
