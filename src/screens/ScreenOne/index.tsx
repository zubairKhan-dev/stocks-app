import { View, Text, Image } from 'react-native';
import styles from './styles';
import Graph from '../../components/Graph';
import data from '../../utils/data'


function ScreenOne() {
    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <Image source={require('../../assets/images/menu.png')}
                    style={styles.menuIcon} />
                <Image source={require('../../assets/images/bell.png')}
                    style={styles.bellIcon} />
            </View>
            <View style={styles.lowerSection}>
                <Graph
                    data={data[0].stockGraph}
                    horizontalLabels={false}
                    verticalLabels={false}
                />
            </View>
        </View>
    )
}

export default ScreenOne