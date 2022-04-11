import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimentions, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';


export default function BusinessConsole(){
    return(
        <View style={styles.container}>
            <Text>Welcome to Business Console</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})