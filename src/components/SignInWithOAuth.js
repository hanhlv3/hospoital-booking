import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { useOAuth } from '@clerk/clerk-expo'
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

WebBrowser.maybeCompleteAuthSession()

const SignInWithOAuth = () => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    useWarmUpBrowser()

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow()

            if (createdSessionId) {
                setActive({ session: createdSessionId })
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error('OAuth error', err)
        }
    }, [])

    return (
        <TouchableOpacity
            className="d-flex flex-row py-1 justify-center items-center bg-white mt-9"
            style={[styles.width_form, styles.google]}
            onPress={onPress}
        >
            <Text className="text-black text-lg font-medium mr-1">
                Sign up with Google
            </Text>
            <Image
                className="w-11 h-10"
                source={require('../../assets/images/google.jpg')}
            />
        </TouchableOpacity>
    )
}
export default SignInWithOAuth

const styles = StyleSheet.create({
    width_form: {
        width: wp(75)
    },
    google: {
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

