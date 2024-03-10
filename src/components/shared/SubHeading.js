import { View, Text } from 'react-native'
import React from 'react'

export default function SubHeading({ title, seeAll = true }) {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    fontFamily: 'appfont-semibold',
                    fontSize: 20,
                    color: '#000000'
                }}
            >
                {title}
            </Text>
            {seeAll ? (
                <Text
                    style={{
                        fontFamily: 'appfont',
                        fontWeight: 'bold',
                        color: 'blue'
                    }}
                >
                    See All
                </Text>
            ) : null}
        </View>
    )
}
