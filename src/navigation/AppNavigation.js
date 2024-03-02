import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import TabNavigation from './TabNavigation'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
import { useNavigationState  } from '@react-navigation/native'
export default function AppNavigation() {
    const navigationState = useNavigationState(state => state);
    const currentRouteIndex = navigationState.index;
    const currentRouteName = navigationState.routes[currentRouteIndex].name;
    const isLoged = true
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen
                    component={Home}
                    name="Home"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <View>
                                {currentRouteName === 'Home' ? (
                                    <Image
                                        source={require('../../assets/images/home.png')}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../assets/images/home_dark.png')}
                                    />
                                )}
                            </View>
                        ),
                        tabBarLabel: ''
                    }}
                />
                <Tab.Screen
                    component={Home}
                    name="Appointment"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <View>
                                {currentRouteName === 'Appointment' ? (
                                    <Image
                                        source={require('../../assets/images/calendar.png')}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../assets/images/calendar_dark.png')}
                                    />
                                )}
                            </View>
                        ),
                        tabBarLabel: ''
                    }}
                />
                <Tab.Screen
                    component={LoginScreen}
                    name="Profile"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <View>
                                {currentRouteName === 'Profile' ? (
                                    <Image
                                        source={require('../../assets/images/user.png')}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../assets/images/user_dark.png')}
                                    />
                                )}
                            </View>
                        ),
                        tabBarLabel: 'testing'
                    }}
                />
            </Tab.Navigator>
            {/* <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={isLoged ? 'home' : 'login'}
            >
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="register" component={RegisterScreen} />
                <Stack.Screen name="home" component={TabNavigation} />
            </Stack.Navigator> */}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
