// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
//
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams,
//     useRouteMatch,
//     NavLink
// } from "react-router-dom";
//
// import Login from "./Components/Login";
// import Menu from "./Components/Menu";
// import Welcome from "./Components/Welcome";
// import NoMatch from "./Components/NoMatch";
//
// function App() {
//   return (
//           <div>
//               <Menu />
//               <Switch>
//                   <Route exact path="/">
//                       <Welcome />
//                   </Route>
//                   <Route path="/login">
//                       <Login/>
//                   </Route>
//                   <NoMatch />
//               </Switch>
//           </div>
//   );
// }
//
// export default App;



import React, { useState,useEffect } from "react"
import facade from "./ApiFacade";

function LogIn({ login }) {
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
        <div>
            <h2>Login</h2>
            <form onChange={onChange} >
                <input placeholder="User Name" id="username" />
                <input placeholder="Password" id="password" />
                <button onClick={performLogin}>Login</button>
            </form>
        </div>
    )

}
function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState("Loading...")

    useEffect(() => { /*TODO*/}, [])

    return (
        <div>
            <h2>Data Received from server</h2>
            <h3>{dataFromServer}</h3>
        </div>
    )

}

function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    const logout = () => { /*TODO*/ }
    const login = (user, pass) => {
        facade.login(user,pass)
            .then(res =>setLoggedIn(true));
    }

    return (
        <div>
            {!loggedIn ? (<LogIn login={login} />) :
                (<div>
                    <LoggedIn />
                    <button onClick={logout}>Logout</button>
                </div>)}
        </div>
    )

}
export default App;
