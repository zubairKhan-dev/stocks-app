import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigatior';
import RootNavigator from './src/navigation/RootNavigator';


export default function App() {
  return (
    <RootNavigator />
  );
}