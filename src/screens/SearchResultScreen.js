import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { ResTauRatsData } from '../global/Data';
import { Colors } from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({ navigation, router }) => {
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    style={{backgroundColor: Colors.cardBackground}}
                    data={ResTauRatsData}
                    keyExtractor={(ỉtem,index) => index.toString()}
                    renderItem={({item,index}) => (
                        <SearchResultCard

                        />
                    )}
                    ListHeaderComponent={
                        <View>
                            <Text></Text>
                        </View>
                    }
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    listHeader: {
        color: Colors.grey1,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: "bold",
    }
})

export default SearchResultScreen;