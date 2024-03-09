import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from  '../screens/Home'
import HospitalDoctorsListScreen from '../screens/HospitalDoctorsListScreen'


const Stack = createStackNavigator()

export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HospitalDoctor" component={HospitalDoctorsListScreen} />
          
        </Stack.Navigator>
    )
}
