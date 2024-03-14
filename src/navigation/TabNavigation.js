import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useNavigationState } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home'
import LoginScreen from '../screens/LoginScreen'
import Profile from '../screens/Profile'
import Appoiment from '../screens/Appoiment'
import HomeNavigation from './HomeNavigation'
import Explores from '../screens/Explores'

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                component={HomeNavigation}
                name="HomeNavigation"
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
                component={Explores}
                name="Explore"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <Ionicons name="search-outline" size={size} color={color} />
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
