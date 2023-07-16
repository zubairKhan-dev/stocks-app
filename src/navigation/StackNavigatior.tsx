import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ScreenOne"
                component={ScreenOne}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ScreenTwo"
                component={ScreenTwo}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default StackNavigator