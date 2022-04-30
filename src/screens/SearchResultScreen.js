import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { ResTauRatsData } from '../global/Data';
import { Colors } from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            {/* <View>
                <FlatList
                    style={{backgroundColor: Colors.CardBackground}}
                    data={ResTauRatsData}
                    keyExtractor={(ỉtem,index) => index.toString()}
                    renderItem={({item,index}) => (
                        <SearchResultCard
                            screenWidth={SCREEN_WIDTH}
                            images={ResTauRatsData[0].images}
                            averageReview={ResTauRatsData[0].averageReview}
                            numberOfReview={ResTauRatsData[0].numberOfReview}
                        />
                    )}
                    ListHeaderComponent={
                        <View>
                            <Text></Text>
                        </View>
                    }
                />
            </View> */}
            <View>
                <Text style={styles.listHeader}>{ResTauRatsData.length} Result for {route.params.item}</Text>
            </View>
            <SearchResultCard
                screenWidth={SCREEN_WIDTH}
                images={ResTauRatsData[0].images}
                averageReview={ResTauRatsData[0].averageReview}
                numberOfReview={ResTauRatsData[0].numberOfReview}
                restaurantName={ResTauRatsData[0].restaurantName}
                farAway={ResTauRatsData[0].farAway}
                businessAddress={ResTauRatsData[0].businessAddress}
            />
        </View>
    )
}
export default SearchResultScreen;

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

