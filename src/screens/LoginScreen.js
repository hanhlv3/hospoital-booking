import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import Logo from '../components/Logo'
import InputData from '../components/InputData'
import SignInWithOAuth from '../components/SignInWithOAuth'
export default function LoginScreen() {
    return (
        <SafeAreaView>
            <View className="">
                <Logo />
                <View
                    className="rounded-tl-3xl rounded-tr-3xl mt-3 items-center pt-5"
                    style={[styles.bg_form, styles.box_form]}
                >
                    <Text className="text-5xl text-black text-center font-bold">
                        Log In
                    </Text>
                    <View className="mt-5 mb-7">
                        <TextInput
                            className="mb-2 px-3 py-2 text-black"
                            placeholder="Phone number or Email"
                            style={[styles.input, styles.width_form]}
                        />
                        <TextInput
                            className="mb-2 px-3 py-2 text-black"
                            placeholder="Password"
                            style={[styles.input, styles.width_form]}
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity
                        className="bg-blue-500 mb-2 px-3 py-2"
                        style={[styles.width_form, styles.google]}
                    >
                        <Text className="text-white text-lg font-bold text-center">
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <Text className="text-black font-medium">
                        Forget password?
                    </Text>
                    <Text className="text-blue-800 font-medium">Register</Text>
                    <SignInWithOAuth />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box_form: {
        height: hp(80)
    },
    width_form: {
        width: wp(75)
    },
    bg_form: {
        backgroundColor: '#91A6C5'
    },
    input: {
        borderRadius: 20,
        backgroundColor: '#E5E5E5',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
