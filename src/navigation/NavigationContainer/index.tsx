import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  Shared,
  Screen,
  NavigatorContainer,
  NavigatorTypes,
} from 'shared';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  ConnectionsProvider,
  StoresProvider,
  ProviderBridge,
  LocalizationProvider,
} from 'components';
import {
  ROUTES,
} from '../routes';

export const generateNavigationElement = (element: any, ParentNavigator: any, key?: any) => {
  if (element instanceof NavigatorContainer) {
    return (
      <ParentNavigator.Screen
        name={element.name}
        key={key}
      >
        {() => generateNavigationElement(element.element, ParentNavigator)}
      </ParentNavigator.Screen>
    );
  }
  if (element instanceof Screen) {
    return (
      <ParentNavigator.Screen
        key={key}
        name={element.name}
        component={(ROUTES as any)[element.name]}
      />
    );
  }
  if (element.navigatorType === NavigatorTypes.STACK) {
    const Navigator = createStackNavigator();
    return (
      <Navigator.Navigator
        initialRouteName={element.defaultRouteName}
        headerMode="none"
      >
        {
          Object.values(element.elements)
            .map((value) => generateNavigationElement(value, Navigator, (value as any).name))
        }
      </Navigator.Navigator>
    );
  }
  const Navigator = createBottomTabNavigator();
  return (
    <Navigator.Navigator
      lazy={false}
    >
      {
        Object.values(element.elements)
          .map((value) => generateNavigationElement(value, Navigator, (value as any).name))
      }
    </Navigator.Navigator>
  );
};

export const AppNavigationContainer: React.FC = () => (
  <NavigationContainer>
    <ConnectionsProvider>
      <StoresProvider>
        <LocalizationProvider>
          <ProviderBridge>
            {
              generateNavigationElement(Shared.navigation.navigationContainer.element, null)
            }
          </ProviderBridge>
        </LocalizationProvider>
      </StoresProvider>
    </ConnectionsProvider>
  </NavigationContainer>
);
