import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigatorParams} from '../models';
import {Landing} from '../containers';

const Stack = createStackNavigator<MainNavigatorParams>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Landing'}>
        <Stack.Screen name={'Landing'} component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
