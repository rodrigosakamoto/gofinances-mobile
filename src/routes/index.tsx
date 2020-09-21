import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Transaction from '../pages/Transaction';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 54,
          },
          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 24,
            height: 24,
          },
          labelStyle: {
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            marginLeft: 15,
          },
          inactiveTintColor: '#969CB2',
          activeTintColor: '#363F5F',
        }}>
        <Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Listagem',
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name="list"
                  size={size}
                  color={focused ? '#FF872C' : color}
                />
              );
            },
          }}
        />
        <Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarLabel: 'Cadastrar',
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name="dollar-sign"
                  size={size}
                  color={focused ? '#FF872C' : color}
                />
              );
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
