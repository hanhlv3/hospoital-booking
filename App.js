import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'

import SignInWithOAuth from './src/components/SignInWithOAuth'
import LoginScreen from './src/screens/LoginScreen'
import SignOut from './src/components/SignOut'
import TabNavigation from './src/navigation/TabNavigation'

const tokenCache = {
    getToken(key) {
        try {
            return SecureStore.getItemAsync(key)
        } catch (err) {
            return null
        }
    },
    saveToken(key, value) {
        try {
            return SecureStore.setItemAsync(key, value)
        } catch (err) {
            return null
        }
    }
}

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
        'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
        'appfont-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
        'appfont-light': require('./assets/fonts/Outfit-Light.ttf'),
        'appfont-medium': require('./assets/fonts/Outfit-Medium.ttf'),

    })

    if (!fontsLoaded) return null

    return (
        <ClerkProvider
            tokenCache={tokenCache}
            publishableKey={
                'pk_test_YWxlcnQtZG9yeS05LmNsZXJrLmFjY291bnRzLmRldiQ'
            }
        >
            <SafeAreaView style={{ flex: 1 }} edges={['right', 'top', 'left']}>
                <SignedIn>
                    <NavigationContainer>
                        <TabNavigation />
                    </NavigationContainer>
                </SignedIn>
                <SignedOut>
                    <LoginScreen />
                </SignedOut>
            </SafeAreaView>
        </ClerkProvider>
    )
}
