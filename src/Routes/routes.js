import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/homePage";


const Routes = () => {
    return (
        <Switch>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch >

    )
}

export default Routes