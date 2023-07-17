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
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIcon: {
        height: 50,
        width: 50,
        //margin: 20
    },
    stockSymbol: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
        fontFamily: theme.DEFAULT_FONT
    },
    stockName: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: '500',
        color: 'grey',
        paddingHorizontal: 10,
        fontFamily: theme.DEFAULT_FONT
    },
    gain: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: '500',
        color: 'green',
        alignSelf: 'flex-start',
        fontFamily: theme.DEFAULT_FONT
    },
    loss: {
        fontSize: theme.MEDIUM_FONTS,
        fontWeight: '500',
        color: 'red',
        alignSelf: 'flex-start',
        fontFamily: theme.DEFAULT_FONT
    },
    dataSet: {
        width: wp(80),
        alignSelf: 'center',
        marginVertical: hp(3)
    },
    data: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    headingContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        width: wp(80),
    },
    subHeadingContainer: {
        display: 'flex',
        alignSelf: 'flex-start',
        marginLeft: wp(10),
        marginTop: 20
    }
})

export default styles