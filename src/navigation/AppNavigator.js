import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import {SplashScreen} from '../screens';
import OnboardingNavigator from './OnboardingNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* Onboarding Flow */}
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />

        {/* Authentication Flow */}
        <Stack.Screen name="Auth" component={AuthNavigator} />

        {/* Main App Screens */}
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
