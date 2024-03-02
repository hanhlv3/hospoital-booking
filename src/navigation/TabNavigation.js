import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigationState  } from '@react-navigation/native'

import Home from '../screens/Home'
import LoginScreen from '../screens/LoginScreen'

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
    const navigationState = useNavigationState(state => state);
    const currentRouteIndex = navigationState.index;
    const currentRouteName = navigationState.routes[currentRouteIndex].name;
    console.log(currentRouteName)
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
                            {
                                currentRouteName === 'Home'?
                                    <Image source={require('../../assets/images/home.png')}/>
                                    :
                                    <Image source={require('../../assets/images/home_dark.png')}/>
                            }
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
                           {
                                currentRouteName === 'Appointment'?
                                    <Image source={require('../../assets/images/calendar.png')}/>
                                    :
                                    <Image source={require('../../assets/images/calendar_dark.png')}/>
                            }
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
                           {
                                currentRouteName === 'Profile'?
                                    <Image source={require('../../assets/images/user.png')}/>
                                    :
                                    <Image source={require('../../assets/images/user_dark.png')}/>
                            }
                        </View>
                    ),
                    tabBarLabel: 'testing'
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

})
