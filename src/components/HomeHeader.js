import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { Colors, parameters } from '../global/styles';

export default function HomeHeader({navigation}) {
    const BadgeIcon = withBadge(3)(Icon)
    return (
        <View style={styles.headerHome}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                <Icon
                    type="material-community"
                    name="menu"
                    color={Colors.CardBackground}
                    size={32}
                    onPress={() =>{
                        navigation.toggleDrawer()
                    }}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ color: Colors.CardBackground, fontSize: 24, fontWeight: 'bold' }}>XpressFood</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' , marginRight:20}}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={35}
                    color={Colors.CardBackground}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerHome: {
        flexDirection: "row",
        backgroundColor: Colors.buttons,
        height: parameters.headerHeight,
        justifyContent:'space-between'
    }
})