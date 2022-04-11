import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const Client = createStackNavigator();


export default function ClientStack (){ 
    return(
        <Client.Navigator>
            <Client.Screen
                name="HomeScreen"
            />
        </Client.Navigator>
    )
}

const styles = StyleSheet.create({
    
})