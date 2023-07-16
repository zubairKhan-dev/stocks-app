import { StyleSheet, Dimensions } from "react-native";
import theme from "../../utils/theme";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp(percentage: any) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
function hp(percentage: any) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 20,
        backgroundColor: '#FAF9F6'
    },
    headerSection: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: theme.PRIMARY_COLOR
    },
    lowerSection: {
        backgroundColor: 'red',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flex: 0.5
    },
    menuIcon: {
        alignSelf: 'flex-start',
        height: 30,
        width: 30,
        tintColor: 'white',
        position: 'absolute',
        marginHorizontal: 15,
        marginVertical: 30
    },
    bellIcon: {
        alignSelf: 'flex-end',
        height: 30,
        width: 30,
        tintColor: 'white',
        marginHorizontal: 15,
        marginVertical: 30
    },
    categoryText: {
        padding: 10,
        fontSize: theme.MEDIUM_FONTS,
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        fontWeight: '500'
    },
    card: {
        borderRadius: 3,
        marginHorizontal: 5,
        marginVertical: 2.5,
        backgroundColor: theme.WHITE,
    },
    stockSymbol: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        flex: 0.3

    },
    stockName: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: '500',
        color: 'grey',
    },
    heading: {
        fontSize: theme.LARGE_FONTS,
        fontWeight: 'bold',
        color: theme.WHITE,
        marginLeft: 20
    },
    gain: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: '500',
        color: 'green',
    },
    loss: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: '500',
        color: 'red',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    }
})

export default styles