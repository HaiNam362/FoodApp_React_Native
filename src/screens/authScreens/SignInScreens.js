import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import { Colors, parameters, title } from '../../global/styles.js';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import HeaderOne from '../../components/HeaderOne';
import * as Animatable from 'react-native-animatable';

export default function SignInScreens({navigation}) {

    const [TextInput2FosSued, SetTextInput2FosSued] = useState(false);

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style={styles.container}>
            <HeaderOne title="My Account" type="arrow-left" navigation={navigation}/>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>Sign-In</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text1}>please enter the mail and password</Text>
                <Text style={styles.text1}>register with your account</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        ref={textInput1}
                    />
                </View>
                <View style={styles.textInput2}>
                    <Animatable.View animation={TextInput2FosSued ? "" : "fadeInLeft"} duration={400}>
                        <Icon
                            name="lock"
                            iconStyle={{ color: Colors.grey3 }}
                            type="material"
                            style={{}}
                        />
                    </Animatable.View>
                    <TextInput
                        style={{ width: "80%" }}
                        placeholder="PassWord"
                        ref={textInput2}
                        onFocus={() => {
                            SetTextInput2FosSued(false)
                        }}
                        onBlur={() => {
                            SetTextInput2FosSued(true)
                        }}
                    />
                    <Animatable.View animation={TextInput2FosSued ? "" : "fadeInLeft"} duration={400}>
                        <Icon
                            name="visibility-off"
                            iconStyle={{ color: Colors.grey3 }}
                            type="material"
                            style={{ marginRight: 10 }}
                            
                        />
                    </Animatable.View>
                </View>
            </View>

            <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
                <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styleButton}
                    titleStyle={parameters.buttonTitle}
                    color="#ff8c52"
                    onPress={() =>{navigation.navigate("DrawerNavigator")}}
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>Forgot Password ?</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>QR</Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <SocialIcon
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                    style={styles.socialIcon}
                    onPress={() => {
                        Alert.alert(" login Facebook", "abc"
                        [
                            {
                                text: "cancel",
                                onPress: () => console.log("Cancel"),
                            },
                            {
                                text: "Ok",
                                onPress: () => console.log("Ok"),
                            }

                        ]
                        )
                    }}
                />
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <SocialIcon
                    title="Sign In With Google"
                    button
                    type="google"
                    style={styles.socialIcon}
                    onPress={() => {
                        Alert.alert(" login Google", "abc"
                        [
                            {
                                text: "cancel",
                                onPress: () => console.log("Cancel"),
                            },
                            {
                                text: "Ok",
                                onPress: () => console.log("Ok"),
                            }
                        ]
                        )
                    }}
                />
            </View>
            <View style={{ marginTop: 15, marginLeft: 20 }}>
                <Text style={{ ...styles.text1 }}>New on XpressFood?</Text>
            </View>
            <View style={{alignItems:"flex-end", marginHorizontal: 20}}>
               <Button
                   title="create an account"
                   buttonStyle={styles.createButton}
                   titleStyle={styles.createButtonTitle}
               />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: Colors.grey2,
        fontSize: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    textInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 15
    },
    socialIcon: {
        borderRadius: 12,
        height: 50
    },
    createButton:{
        backgroundColor:"white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
    },
    createButtonTitle:{
        color: "#ff8c52",
        fontSize: 16,
        fontWeight:"bold",
        alignContent: "center",
        justifyContent: "center",
        marginTop:-3,
    }
})