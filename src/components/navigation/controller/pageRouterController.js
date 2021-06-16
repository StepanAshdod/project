import {Redirect, Route, Switch} from "react-router";
import {ACCOUNT, LOCATION, MAIN_PATH, PRODUCT} from "../../../service/apiConst";
import {MainPage} from "../../pages/MainPage/MainPage";
import {Accounts} from "../../pages/Accounts/Accounts";
import {Products} from "../../pages/Products/Products";
import {Locations} from "../../pages/Locations/Locations";


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


