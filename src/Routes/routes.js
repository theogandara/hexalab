import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/homePage";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch >

    )
}

export default Routes