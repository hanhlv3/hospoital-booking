import { View, Text, Image } from 'react-native'
import React from 'react'

import logo from '../../assets/images/logo.jpg'
export default function Logo() {
    return (
        <View className="d-flex flex-row  justify-between items-center mt-2">
            <View className="w-24 h-48 bg-cyan-300 rounded-tr-full rounded-br-full" />
            <View className="d-flex flex-row">
                <Image className="w-14 h-11" source={logo} />
                <Text className="text-blue-600 text-xl font-bold ml-1">
                    MEDEASY
                </Text>
            </View>
            <View className="d-flex flex-row justify-end items-center w-24 h-48 bg-cyan-300 rounded-tl-full rounded-bl-full">
                <View className="w-16 h-36 bg-blue-400  rounded-tl-full rounded-bl-full" />
            </View>
        </View>
    )
}

