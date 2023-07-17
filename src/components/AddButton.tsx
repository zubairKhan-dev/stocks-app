/* a button component */
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native'
import theme from '../utils/theme'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const AddButton = (props: any) => {

    return (
        <TouchableOpacity onPress={props.onPress}
            style={styles.button}
        >
            <View style={styles.background}>
                <Text style={styles.buttonText}>Add to Portfolio</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 0
    },
    background: {
        backgroundColor: theme.BLACK,
        width: width * 0.8,
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        padding: 20,
        color: theme.WHITE,
        fontWeight: 'bold',
        fontSize: theme.MEDIUM_FONTS,
        fontFamily: theme.DEFAULT_FONT
    }
})

export default AddButton