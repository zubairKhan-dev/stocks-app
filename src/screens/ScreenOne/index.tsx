import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import Graph from '../../components/Graph';
import { getStocks } from '../../api/Stocks';
import SearchInput from '../../components/SearchInput';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';

function ScreenOne(props: any) {

    // json data
    const data = getStocks();

    // searched text
    const [searchText, setSearchText] = useState('');

    // render list
    const renderItem = ({ item }: any) => {
        if (item.stockSymbol.toLowerCase().includes(searchText.toLowerCase()) || item.stockName.toLowerCase().includes(searchText.toLowerCase())) {

            return (
                <Animatable.View animation={"bounceIn"} delay={400}>
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
            <KeyboardAvoidingView>
                <FlatList
                    data={data.sort((a: any, b: any) => a.stockSymbol.localeCompare(b.stockSymbol))}
                    extraData={data.sort((a: any, b: any) => a.stockSymbol.localeCompare(b.stockSymbol))}
                    renderItem={renderItem}
                    ListHeaderComponent={
                        <Animatable.View animation={'slideInDown'} delay={200}>
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
                                <ScrollView horizontal={true} >
                                    <Text style={styles.categoryText}>Main market</Text>
                                    <Text style={styles.categoryText}>Junior market</Text>
                                    <Text style={styles.categoryText}>Main market</Text>
                                    <Text style={styles.categoryText}>FX rates</Text>
                                    <Text style={styles.categoryText}>Funds</Text>
                                </ScrollView>
                            </View>
                        </Animatable.View>
                    }
                />
            </KeyboardAvoidingView>
        </View>

    )
}

export default ScreenOne