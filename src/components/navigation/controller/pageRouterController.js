import { Redirect, Route, Switch } from "react-router";
import { ACCOUNT, LOCATION, MAIN_PATH, PRODUCT } from "../../../service/apiConsts";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Accounts } from "../../pages/Accounts/Accounts";
import { Locations } from "../../pages/Locations/Locations";
import { Products } from "../../pages/Products/Products";


export const pageRouter = () => {
    return (
        <Switch>
            <Route path={ "/" + MAIN_PATH.toLowerCase() } component={ MainPage } exact/>
            <Route path={ "/" + ACCOUNT.toLowerCase() } component={ Accounts } exact/>
            <Route path={ "/" + LOCATION.toLowerCase() } component={ Locations } exact/>
            <Route path={ "/" + PRODUCT.toLowerCase() } component={ Products } exact/>
            <Redirect to={ "/" + MAIN_PATH.toLowerCase() }/>
        </Switch>
    )
};


