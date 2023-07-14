import { StyleSheet, Dimensions } from "react-native";
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
        marginVertical: 20,
    },
    upperSection: {
        backgroundColor: 'blue',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1
    },
    lowerSection: {
        backgroundColor: 'red',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flex: 2
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
    }
})

export default styles