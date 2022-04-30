import React, { useState, useRef } from 'react';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SignInWelcomeScreens from '../screens/authScreens/SignInWelcomeScreens';
import SignScreen from '../screens/authScreens/SignInScreens';
import HomeScreens from '../screens/HomeScreens';
import RootClientTabs from './ClientTabs';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';

const Auth = createStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="SignInWelcomeScreens"
                component={SignInWelcomeScreens}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="SignScreen"
                component={SignScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="RestaurantsMapScreen"
                component={RestaurantsMapScreen}
                options={
                    {
                        headerShown: false,
                        ...TransitionPresets.RevealFromBottomAndroid
                    }
                }
            />
        </Auth.Navigator>
    )
}

