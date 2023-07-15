import { StyleSheet } from 'react-native'
import theme from '../utils/theme'

const styles = StyleSheet.create({
    tabBarIcon: {
        height: 40,
        width: 40,
        tintColor: theme.PRIMARY_COLOR,
    },
    tabBarIconInactive: {
        height: 40,
        width: 40,
        tintColor: theme.BLACK,
    },
    tabBarLabelStyle: {
        fontSize: 14,
        padding: 0,
        marginBottom: 10,
        marginTop: -10
    },
    tabBarStyle: {
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: theme.WHITE,
        height: 100,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    }
})

export default styles