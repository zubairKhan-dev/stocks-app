import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigatior';
import BottomTabNavigator from './BottomTabNavigator';


export default function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}