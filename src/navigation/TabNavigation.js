import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useNavigationState } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

import Home from '../screens/Home'
import LoginScreen from '../screens/LoginScreen'
import Profile from '../screens/Profile'
import Appoiment from '../screens/Appoiment'

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
    return (
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
                            <FontAwesome
                                name="home"
                                size={size}
                                color={color}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                component={Appoiment}
                name="Appointment"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <FontAwesome
                                name="calendar-o"
                                size={size}
                                color={color}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                component={Profile}
                name="Profile"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <FontAwesome
                                name="user-circle"
                                size={size}
                                color={color}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
