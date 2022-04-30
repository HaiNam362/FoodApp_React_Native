import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { Colors, parameters } from '../global/styles';
import HomeScreens from '../screens/HomeScreens';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import { clientStack } from './ClientStack';


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return (
        <ClientTabs.Navigator
            tabBarOptions={{
                activeTintColor: Colors.buttons
            }}
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreens}
                options={
                    {
                        headerShown: false,
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="home"
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name="SearchScreen"
                component={clientStack}
                options={
                    {
                        headerShown: false,
                        tabBarLabel: "Search",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="search"
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name="MyOrdersScreen"
                component={MyOrdersScreen}
                options={
                    {
                        headerShown: false,
                        tabBarLabel: "My Order",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="view-list"
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={
                    {
                        headerShown: false,
                        tabBarLabel: "My Account",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="person"
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            
        </ClientTabs.Navigator>
    )
}

