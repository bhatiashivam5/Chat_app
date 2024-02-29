import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import LoginScreen from './src/components/login/login';
import ChatScreen from './src/screens/chat/chat';
import ProfileScreen from './src/screens/profile/profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from './src/screens/userslist/userslist';
import SignupScreen from './src/components/signup/signup';
import OTPVerification from './src/components/verifyOtp/verifyOtp';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



type NavigationContainerProps = {
  Login: undefined,
  Register: undefined,
  OTPVerification: undefined,
  Main: undefined,
  Chat: undefined,
  Users: undefined,
  Profile: undefined
}
export interface AppNavigationProps<RouteName extends keyof NavigationContainerProps> {
  navigation: StackNavigationProp<NavigationContainerProps, RouteName>;
  route: RouteProp<NavigationContainerProps, RouteName>;
}
const Tab = createMaterialTopTabNavigator<NavigationContainerProps>();
const Stack = createNativeStackNavigator<NavigationContainerProps>();

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#582C7D',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          backgroundColor: '#582C7D',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen name="Users" component={UsersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default App;
