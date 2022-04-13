import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const ClientSearch = createStackNavigator();


export default function ClientStack (){ 
    return(
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name="HomeScreen"
                component={Home}
            />
        </ClientSearch.Navigator>
    )
}

const styles = StyleSheet.create({
    
})