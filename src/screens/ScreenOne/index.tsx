import { View, Text, Image, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import Graph from '../../components/Graph';
import { getStocks } from '../../api/Stocks';
import SearchInput from '../../components/SearchInput';
import { Card} from 'react-native-paper';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import CategoryView from '../../components/CategoryView';
import { StatusBar } from 'expo-status-bar';
import React from "react"

function ScreenOne(props: any) {

    // json data
    const data = getStocks();

    // searched text
    const [searchText, setSearchText] = useState('');

    // render list items
    const renderItem = ({ item }: any) => {
        if (item.stockSymbol.toLowerCase().includes(searchText.toLowerCase()) || item.stockName.toLowerCase().includes(searchText.toLowerCase())) {

            return (
                <Animatable.View animation={"fadeIn"} delay={400}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('ScreenTwo', {
                            stockSymbol: item.stockSymbol,
                            stockName: item.stockName,
                            stockGraph: item.stockGraph,
                            currentPrice: item.currentPrice,
                            percentageGain: item.percentageGain
                        })
                    }}>
                        <Card style={styles.card}>
                            <Card.Content style={styles.cardContent}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode='tail'
                                        style={styles.stockSymbol}
                                    >
                                        {item.stockSymbol}
                                    </Text>
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode='tail'
                                        style={styles.stockName}
                                    >
                                        {item.stockName}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Graph
                                        data={item.stockGraph}
                                        horizontalLabels={false}
                                        verticalLabels={false}
                                        width={80}
                                        height={80}
                                        color={item.percentageGain > 0 ? 'green' : 'red'}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode='tail'
                                        style={styles.stockSymbol}
                                    >
                                        {'$'}{item.currentPrice}
                                    </Text>
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode='tail'
                                        style={item.percentageGain > 0 ? styles.gain : styles.loss}
                                    >
                                        {item.percentageGain}{'%'}
                                    </Text>
                                </View>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                </Animatable.View>
            )
        }
        else {
            return <></>
        }

    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <KeyboardAvoidingView>
                <FlatList
                    data={data.sort((a: any, b: any) => a.stockSymbol.localeCompare(b.stockSymbol))}
                    extraData={data.sort((a: any, b: any) => a.stockSymbol.localeCompare(b.stockSymbol))}
                    renderItem={renderItem}
                    ListHeaderComponent={
                        <View>
                            <View style={styles.headerSection}>
                                <Image source={require('../../assets/images/menu.png')}
                                    style={styles.menuIcon} />
                                <Image source={require('../../assets/images/bell.png')}
                                    style={styles.bellIcon} />
                                <Text style={styles.heading}>Markets</Text>
                                <SearchInput
                                    onChangeText={
                                        (e: any) => setSearchText(e)
                                    }
                                />
                                <CategoryView />
                            </View>
                        </View>
                    }
                />
            </KeyboardAvoidingView>
        </View>

    )
}

export default React.memo(ScreenOne)