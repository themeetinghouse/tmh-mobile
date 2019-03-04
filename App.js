import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import awsConfig from './src/aws-exports';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Button } from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import NewsScreen from './screens/NewsScreen/NewsScreen'
import TeachingScreen from './screens/TeachingScreen/TeachingScreen'
Amplify.configure(awsConfig);

import { Authenticator } from 'aws-amplify-react-native';





const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen,
    News: NewsScreen,
    Teaching: TeachingScreen
    
});

const App = createAppContainer(MainNavigator);

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});