import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CartScreen,
  HomeScreen,
  NotificationScreen,
  OrderHistoryScreen,
  ProfileScreen,
  SearchScreen,
} from '../../screens';
import {Icons, Screen} from '../../constants';
import {ProfileHeaderOption} from '../../headerOptions';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screen.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.NOTIFICATIONS}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};

const OrderHistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screen.ORDERHISTORY} component={OrderHistoryScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screen.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screen.CART} component={CartScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.PROFILE}
        component={ProfileScreen}
        options={ProfileHeaderOption}
      />
    </Stack.Navigator>
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}>
      <Tab.Screen
        name={Screen.HOME_TAB}
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HOME color={focused ? 'black' : 'black'} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={Screen.SEARCH_TAB}
        component={SearchStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.SEARCH color={focused ? 'black' : 'black'} />
          ),
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name={Screen.CART_TAB}
        component={CartStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.CART color={focused ? 'black' : 'black'} />
          ),
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen
        name={Screen.ORDERHISTORY_TAB}
        component={OrderHistoryStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HISTORY color={focused ? 'black' : 'black'} />
          ),
          tabBarLabel: 'Order History',
        }}
      />
      <Tab.Screen
        name={Screen.PROFILE_TAB}
        component={ProfileStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.PROFILE color={focused ? 'black' : 'black'} />
          ),
          tabBarLabel: 'Profile',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
