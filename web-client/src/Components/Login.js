function Login() {
    return (
        <div>
            <main className="form-signin">
                <form className="mt-5">
                        <h1 className="h3 mb-3 fw-normal text-center">Please login  </h1>

                        <div className="form-floating mt-4">
                            <input type="username" className="form-control" id="floatingInput"
                                   placeholder="username"/>
                                <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>
            </main>
        </div>
    )
}

export default Login;