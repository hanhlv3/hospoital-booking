import { View, Text } from 'react-native'
import React from 'react'
import Color from '../../shared/Color'

export default function HorizontalLine() {
    return (
        <View
            style={{
                borderBottomWidth: 1,
                borderColor: Color.Light_Gray,
                marginTop: 15,
                marginBottom: 15
            }}
        ></View>
    )
}
