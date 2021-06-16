import React from 'react';

import { PaperBase } from "./components/navigation/PaperBase";
import {MAIN_PATH} from "./service/apiConst";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";

export const App = () => {
    return (
        <Switch>
            <Route path={ "" } component={ PaperBase } exact/>
            <Redirect to={ "/" + MAIN_PATH }/>
        </Switch>
    );
}

