import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  FavoriteScreen,
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  SearchScreen,
} from '../../screens';
import {Screen} from '../../constants';
import {ProfileHeaderOption} from '../../headerOptions';

const Stack = createNativeStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screen.HOME} component={HomeScreen} />
      <Stack.Screen name={Screen.FAVORITE} component={FavoriteScreen} />
      <Stack.Screen
        name={Screen.NOTIFICATIONS}
        component={NotificationScreen}
      />
      <Stack.Screen name={Screen.PROFILE} component={ProfileScreen} />
      <Stack.Screen
        name={Screen.SEARCH}
        component={SearchScreen}
        options={ProfileHeaderOption}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
