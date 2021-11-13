import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
} from "react-router-dom";

import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Welcome from "./Components/Welcome";
import NoMatch from "./Components/NoMatch";
import Chuck from "./Components/Chuck";
import Dad from "./Components/Dad";
import JokeAPI from "./Components/JokeAPI";

import React, { useState,useEffect } from "react";
import facade from "./ApiFacade";



function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    const logout = () => { /*TODO*/ }
    const login = (user, pass) => {
        facade.login(user,pass)
            .then(res =>setLoggedIn(true));
    }

    return (
        <div>
            {!loggedIn ? (<Login login={login} />) :
                (<div>
                    <Menu />
                    <Switch>
                     <Route exact path="/">
                     <Welcome />
                     </Route>
                     <Route exact path="/chuck">
                     <Chuck />
                     </Route>
                     <Route exact path="/dad">
                     <Dad />
                     </Route>
                        <Route exact path="/jokeapi">
                            <JokeAPI />
                        </Route>
                    <Route path="/login">
                    <Login/>
                    </Route>
                    <NoMatch />
                    </Switch>
                    <LoggedIn />
                </div>)}

        </div>
    )

}


function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState("Loading...")

    useEffect(() => { /*TODO*/}, [])

    return (
        <div>

        </div>
    )

}



export default App;
