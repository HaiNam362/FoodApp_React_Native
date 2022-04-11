import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native';
import { Colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper';


export default function SignInWelcomeScreens({navigation}) {
    /**
     * 
     */
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: Colors.buttons, fontWeight: 'bold' }}>DISCOVER RESTAURANTS</Text>
                <Text style={{ fontSize: 26, color: Colors.buttons, fontWeight: 'bold' }}>IN YOUR AREA</Text>
            </View>
            <View style={{ flex: 4, justifyContent: "center" }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-3.jpg" }}
                            style={{ height: "100%", width: "100%" }}

                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/06_2020/mon-ngon-da-lat-oc-buou-nhoi-thit.jpg" }}
                            style={{ height: "100%", width: "100%" }}

                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://wallpaperaccess.com/full/271701.jpg" }}
                            style={{ height: "100%", width: "100%" }}

                        />
                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "http://pldesign.com.vn/public/image/images/hinh-nen-do-an-cho-desktop-12.jpg" }}
                            style={{ height: "100%", width: "100%" }}

                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: "https://afamilycdn.com/fRhOWcbaG01Vd2ydvKbOwEYcba/Image/2016/04/44-hang-nam-se-la-ngay-cua-pho-viet-nam-tai-nhat-ban_20160404094619566.jpg" }}
                            style={{ height: "100%", width: "100%" }}

                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://bazantravel.com/cdn/medias/uploads/73/73038-mon-ngon-o-tuy-tuu-lau-700x525.jpg" }}
                            style={{ height: "100%", width: "100%" }}

                        />
                    </View>
                </Swiper>
            </View>
            <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 20 }}>
                <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={parameters.styleButton}
                        titleStyle={parameters.buttonTitle}
                        color="#ff8c52"
                        onPress={()=>{
                            navigation.navigate("SignScreen")
                        }}
                    />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Button
                        title="create an account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20,
        borderColor: Colors.buttons
    },
    createButtonTitle: {
        color: Colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignContent: "center",
        justifyContent: "center",
        marginTop: -3,
    }

})