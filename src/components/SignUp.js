import React from 'react'
import { connect } from 'react-redux';

const SignUp = (props) => {
    console.log("signup props", props);
    return (
        <form>
            <input name="username" placeholder="Username" />
            <input name="password" placeholder="Password" />
            <button>Sign Up</button>
        </form>
    )
}

const mapStateToProps = state => {
    return { state }
}


export default connect(mapStateToProps)(SignUp)