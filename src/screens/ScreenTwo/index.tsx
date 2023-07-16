import { View, Text, Dimensions, Image, ScrollView } from 'react-native'
import Graph from '../../components/Graph'
import theme from '../../utils/theme'
import styles from './styles'
import AddButton from '../../components/AddButton'
import { TouchableOpacity } from 'react-native-gesture-handler'

function ScreenTwo(props: any) {

    // route data
    const data = props.route.params

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Image source={require('../../assets/images/left-arrow.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <View >
                    <Text style={styles.stockSymbol}>{data.stockSymbol}</Text>
                    <Text style={styles.stockName}>{data.stockName}</Text>
                </View>
            </View>

            <View style={styles.subHeadingContainer}>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{'$'}{data.currentPrice}</Text>
                <Text style={data.percentageGain > 0 ? styles.gain : styles.loss}>{data.percentageGain}{'%'}</Text>
            </View>

            <View style={{ marginLeft: 30 }}>
                <Graph
                    data={data.stockGraph}
                    horizontalLabels={true}
                    verticalLabels={true}
                    color={theme.BLACK}
                    height={Dimensions.get('window').height * 0.3}
                    width={Dimensions.get('window').width}
                />
            </View>

            <View style={styles.dataSet}>
                <View style={styles.data}>
                    <Text>Close Price</Text>
                    <Text style={{ fontWeight: 'bold' }}>25332.00</Text>

                </View>
                <View style={styles.data}>
                    <Text>Last Trade Price</Text>
                    <Text style={{ fontWeight: 'bold' }}>25373.00</Text>

                </View>
                <View style={styles.data}>
                    <Text>Outstanding</Text>
                    <Text style={{ fontWeight: 'bold' }}>856924860.00</Text>

                </View>
                <View style={styles.data}>
                    <Text>Market Value</Text>
                    <Text style={{ fontWeight: 'bold' }}>$489,856,924,860.00</Text>

                </View>
            </View>

            <AddButton />
        </View>
    )
}

export default ScreenTwo