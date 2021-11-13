import React, {useState} from "react";

function Login({ login }) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }

    return (
        <div className="form-signin">
            <h1 className="h3 mb-3 fw-normal text-center">Please login</h1>
            <form onChange={onChange}>
                <input placeholder="Username" id="username" className="form-control mt-3" />
                <input type="password" placeholder="Password" id="password" className="form-control mt-3" />
                <button onClick={performLogin} className="w-100 btn btn-lg btn-primary mt-3">Login</button>
            </form>
        </div>
    )

}

export default Login;