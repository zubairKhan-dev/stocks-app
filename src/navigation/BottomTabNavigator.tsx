/* bottom tab navigation compnent */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigatior';
import { Image } from 'react-native';
import styles from './styles';
import theme from '../utils/theme';
import News from '../screens/News';
import Portfolio from '../screens/Portfolio';

const Tab = createBottomTabNavigator(); 

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Markets' //initial screen to render
            screenOptions={({ route }) => ({ //options to style tab navigator
                tabBarHideOnKeyboard: true,
                tabBarLabelPosition: "below-icon",
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: true,
                headerShown: false,
                tabBarActiveTintColor: theme.PRIMARY_COLOR,
                tabBarInactiveTintColor: theme.BLACK,
            })}
        >
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarLabel: 'Portfolio',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/images/pie-chart.png')}
                            style={focused ? styles.tabBarIcon : styles.tabBarIconInactive}
                        />
                    ),

                }}
            />
            <Tab.Screen
                name="Markets"
                component={StackNavigator}
                options={{
                    tabBarLabel: 'Markets',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/images/up-and-down-arrow.png')}
                            style={focused ? styles.tabBarIcon : styles.tabBarIconInactive}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="News"
                component={News}
                options={{
                    tabBarLabel: 'News',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/images/newspaper-folded.png')}
                            style={focused ? styles.tabBarIcon : styles.tabBarIconInactive}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator