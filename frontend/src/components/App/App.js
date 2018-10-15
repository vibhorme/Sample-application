import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "../Home";
import Login from "../Login";
import Error404 from "../Error404";

import Search from "../Search/Search";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path= "/Search" component= {Search} />

                {/* 404 */}
                <Route component={Error404} />
            </Switch>
        );
    }
}

export default App;
