import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import Graph from '../../components/Graph';
import { getStocks } from '../../api/Stocks';
import SearchInput from '../../components/SearchInput';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useState } from 'react';

function ScreenOne() {

    // json data
    const data = getStocks();

    // searched text
    const [searchText, setSearchText] = useState('');

    // render list
    const renderItem = ({ item }: any) => {
        console.log('item h ye', item)
        if (item.stockSymbol.toLowerCase().includes(searchText.toLowerCase()) || item.stockName.toLowerCase().includes(searchText.toLowerCase())) {

            return (
                <Card style={styles.card}>
                    <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.stockSymbol}>{item.stockSymbol}</Text>
                            <Text style={styles.stockName}>{item.stockName}</Text>
                        </View>
                        <Graph
                            data={item.stockGraph}
                            horizontalLabels={false}
                            verticalLabels={false}
                            width={100}
                            height={100}
                            style={{
                                paddingTop: 0,
                                paddingRight: 0,
                                paddingLeft: -20,
                            }}
                        />


                        <View>
                            <Text style={styles.stockSymbol}>{item.currentPrice}</Text>
                            <Text 
                             style= {item.percentageGain > 0 ? styles.gain : styles.loss}
                            >
                                {item.percentageGain}
                                </Text>
                        </View>
                    </Card.Content>

                </Card>
            )
        }
        else {
            return <></>
        }

    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.sort((a: any, b: any) => a.stockSymbol.localeCompare(b.stockSymbol))}
                extraData={data.sort((a: any, b: any) => a.stockSymbol.localeCompare(b.stockSymbol))}
                renderItem={renderItem}
                ListHeaderComponent={
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
                }
            />
        </View>
    )
}

export default ScreenOne