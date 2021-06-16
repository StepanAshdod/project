import React from 'react';
import { Redirect, Route, Switch } from "react-router";
import { ACCOUNT, LOCATION, MAIN_PATH, PRODUCT } from "./service/apiConsts";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { Accounts } from "./components/pages/Accounts/Accounts";
import { Locations } from "./components/pages/Locations/Locations";
import { Products } from "./components/pages/Products/Products";
import { PaperBase } from "./components/navigation/PaperBase";

export const App = () => {
    return (
        <Switch>
            <Route path={ "" } component={ PaperBase } exact/>
            <Redirect to={ "/" + MAIN_PATH }/>
        </Switch>
    );
}
export default App;

