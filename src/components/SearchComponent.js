import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, TextInput, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import { Colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { filterData } from '../global/Data';
import filter from 'lodash/filter';


export default function SearchComponent() {
    const navigation = useNavigation();
    const [data, setData] = useState([...filterData]);
    const [modalVisible, setmodalVisible] = useState(false);
    const [textInputFossued, setTextInputFossued] = useState(true);
    const textInput = useRef(0);

    const contains = ({ name, query }) => {
        if (name.includes(query)) {
            return true;
        }
        return false;
    }

    const handleSearch = text => {
        const dataS = filter(filterData, userSearch => {
            return contains(userSearch, text)
        })
        setData([...dataS])
    }


    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    setmodalVisible(true)
                }}
            >
                <View style={styles.SearchArea}>
                    <Icon
                        name="search"
                        style={styles.searchIcon}
                        type="material"
                        iconStyle={{ marginLeft: 5 }}
                        size={32}
                    />
                    <Text>What are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.View1}>
                        <View style={styles.textInput}>
                            <Animatable.View
                                animation={textInputFossued ? "fadeInRight" : "fadeInLeft"}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFossued ? "arrow-back" : "Search"}
                                    onPress={() => {
                                        if (textInputFossued)
                                            setmodalVisible(false)
                                        setTextInputFossued(true)
                                    }}
                                    style={styles.icon2}
                                    type="material"
                                    iconStyle={{ marginLeft: 5 }}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{ width: "88%" }}
                                placeholder="search..."
                                autoFocus={false}
                                ref={textInput}
                                onFocus={() =>{
                                    setTextInputFossued(true)
                                }}
                                onBlur={() =>{
                                    setTextInputFossued(false)
                                }}
                                onChangeText={() =>{
                                    handleSearch
                                }}
                            />
                            <Animatable.View
                                animation={textInputFossued ? "fadeInLeft" : ""}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFossued ? "cancel" : null}
                                    iconStyle={{ color: Colors.grey3 }}
                                    type="material"
                                    style={{ marginRight: -10 }}
                                    onPress={() => {
                                        textInput.current.clear()
                                        // handleSearch()
                                    }}
                                />
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                Keyboard.dismiss
                                navigation.navigate("SearchResultScreen", { item: item.name })
                                setmodalVisible(false)
                                setTextInputFossued(true)
                            }}>
                                <View style={styles.View2}>
                                    <Text style={{ color: Colors.grey2, fontSize: 15 }}>{item.name}</Text>
                                </View>

                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: Colors.grey3,
        fontSize: 16,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    SearchArea: {
        marginTop: 10,
        width: "94%",
        height: 50,
        backgroundColor: Colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.grey4,
        flexDirection: "row",
        alignItems: "center",
    },
    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: Colors.grey2,
    },
    View1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    View2: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
    },
    icon2: {
        fontSize: 24,
        padding: 5,
        color: Colors.grey2,
    },
    modal: {
        flex: 1
    }
})