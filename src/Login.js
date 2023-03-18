import React from "react";

export default class Login extends React.Component {
    render() {
        return <center>
            <form>
                <h3>Log In:</h3>
                <div className='burgerform'>
                <div className='form-group row'>
                    <label className='col-6' for='userName'>Name:</label>
                    <input className="form-control col" id='userName' placeholder="xXUserNameXx">
                    </input>
                </div>
                <div className='form-group row'>
                    <label className='col-6' for='password'>Password:</label>
                    <input className="form-control col" id='password' placeholder="************">
                    </input>
                </div>
                <button class='btn btn-primary'>Sign In!</button>
                </div>
            </form>
        </center>
    }
}