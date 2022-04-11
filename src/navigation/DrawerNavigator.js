import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import BusinessConsole from '../screens/BusinessConsoleScreen';
import { Icon } from 'react-native-elements';
import { Colors } from '../global/styles.js';
import DrawerContent from '../components/DrawerContent';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props =><DrawerContent {...props}/>}
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    title: 'client',
                    headerShown: false,
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            type="material-community"
                            name="home"
                            color={focussed ? '#7cc' : Colors.grey2}
                            size={size}
                        />
                    )
                }}

            />
            <Drawer.Screen
                name="BusinessConsole"
                component={BusinessConsole}
                options={{
                    title: 'Business console',
                    headerShown: false,
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            type="material"
                            name="business"
                            color={focussed ? '#7cc' : Colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}
