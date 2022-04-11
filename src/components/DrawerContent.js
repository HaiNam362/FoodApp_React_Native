import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Button, Icon } from 'react-native-elements';
import { Colors } from '../global/styles'

export default function DrawerContent(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: Colors.buttons }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingVertical: 10 }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            size={75}
                            source={{ uri: "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/101072061_885452771966136_3281240579035365376_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=GU1MsqYiS44AX81MQMC&_nc_ht=scontent.fhan15-1.fna&oh=00_AT-piKSKTWrs_OhEZ67q2QhwQkN0qvbm92TdLVfOfYML5w&oe=6231581D" }}
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: 'bold', color: Colors.CardBackground, fontSize: 18 }}>Nguyễn Hải Nam</Text>
                            <Text style={{ color: Colors.CardBackground, fontSize: 14 }}>Nam62@xpressfood.com</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: Colors.CardBackground, fontSize: 18 }}>1</Text>
                                <Text style={{ color: Colors.CardBackground, fontSize: 18 }}>My Favortes</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: Colors.CardBackground, fontSize: 18 }}>0</Text>
                                <Text style={{ color: Colors.CardBackground, fontSize: 18 }}>My Cart</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <DrawerItemList {...props} />
                <DrawerItem
                    label="Payment"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label="Promotions"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="tag-heart"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label="Setting"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="cog-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label="Help"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="lifebuoy"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <View style={{borderTopWidth:1, borderTopColor: Colors.grey5}}>
                        <Text style={styles.preferences}>Preferences</Text>
                        <View style={styles.switchText}>
                            <Text style={styles.darkthameText}>Dark Theme</Text>
                            <View style={{paddingRight:10}}>
                                <Switch
                                    trackColor={{false: "#767577", true: "#81b0ff"}}
                                    thumbColor= "#f4f3f4"
                                />
                            </View>
                        </View>
                </View>
               
            </DrawerContentScrollView>
            <DrawerItem
                    label="Sign Out"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="logout-variant"
                            color={color}
                            size={size}
                        />
                    )}
                />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        borderWidth: 4,
        borderColor: Colors.pageBackground,
    },
    preferences: {
        fontSize:16,
        color: Colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:20, 
        paddingVertical:5,
        paddingRight:10
    },
    darkthameText:{
        fontSize:16,
        color: Colors.grey2,
        paddingTop:10,
        paddingLeft:10,
        fontWeight:"bold"
    }
})