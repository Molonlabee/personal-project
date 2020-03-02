import React from "react";
import { Switch, Route} from "react-router-dom";

import Login from "./Components/Login/Login.js";
import CreatePost from './Components/CreatePost/CreatePost.js'
import Moods from './Components/Moods/Moods.js'
import Register from './Components/Register/Register.js'


export default (
        <Switch>
            <Route exact path="/"  component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Moods" component={Moods} />
            <Route path="/CreatePost" component={CreatePost} />
        </Switch>
);