import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RestaurantsMapScreen(){
    return(
        <View style={styles.container}>
            <Text>RestaurantsMapScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})