import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const ClientSearch = createStackNavigator();


export  function clientStack (){ 
    return(
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={
                    ()=> ({
                        headerShown: false,
                    })
                }
            />
            <ClientSearch.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={
                    ()=> ({
                        headerShown: false,
                    })
                }
            />
        </ClientSearch.Navigator>
    )
}

const styles = StyleSheet.create({
    
})