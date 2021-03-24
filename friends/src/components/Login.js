import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        creds: {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            creds:{
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        })
    }

    submitLogin = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/login", this.state.creds)
            .then((res)=>{
                localStorage.setItem("token", res.data.payload)
                this.props.history.push("/friends")
            })
            .catch((err)=>{
                console.log(err)
                console.log(err.response)
            })
    }

    render(){
        return(
            <div className="login-form-container">
                <form onSubmit={this.submitLogin}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.creds.username}
                        placeholder="Username"
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />

                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;