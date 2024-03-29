import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function PageHeader({ title, backButton = true }) {
    const navigation = useNavigation()

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            {backButton && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={37}
                        color="black"
                    />
                </TouchableOpacity>
            )}

            <Text
                style={{
                    fontSize: 25,
                    fontFamily: 'appfont-semibold'
                }}
            >
                {title}
            </Text>
        </View>
    )
}
