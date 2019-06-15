import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
// importing Views
import Auth from "./Views/Auth";
import Home from "./Views/Home";
import Repository from "./Views/Repository";

// Routing


const _main = createStackNavigator({
    Auth: {
        screen: Auth,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: Home,
    },
    Repository: {
        screen: Repository,
    }
})
const _mainContainer = createAppContainer(_main);


const Routes = createAppContainer(_mainContainer);
export default Routes;