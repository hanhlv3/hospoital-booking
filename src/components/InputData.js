import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
export default function InputData( { placeholder, secureTextEntry }) {
    return (
        <TextInput className="mb-2 px-3 text-black" placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry == 'true'}/>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 20,
        backgroundColor: '#E5E5E5',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: wp(75),
    },
})
