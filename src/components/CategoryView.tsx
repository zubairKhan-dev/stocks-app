/* a component to render categories */
import { View, Text, StyleSheet, ScrollView } from "react-native";
import theme from "../utils/theme";

const CategoryView = () => {
    return (
        <ScrollView horizontal={true} >
            <Text style={styles.categoryText}>Main market</Text>
            <Text style={styles.categoryText}>Junior market</Text>
            <Text style={styles.categoryText}>Main market</Text>
            <Text style={styles.categoryText}>FX rates</Text>
            <Text style={styles.categoryText}>Funds</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoryText: {
        padding: 10,
        fontSize: theme.MEDIUM_FONTS,
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        fontWeight: '500',
        fontFamily: theme.DEFAULT_FONT
    },
})

export default CategoryView