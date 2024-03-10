import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Color from '../../shared/Color'

const actionButtonList = [
    {
        id: 1,
        name: 'Website',
        icon: 'earth'
    },
    {
        id: 2,
        name: 'Email',
        icon: 'chatbubble-ellipses'
    },
    {
        id: 3,
        name: 'Phone',
        icon: 'call'
    },
    {
        id: 4,
        name: 'Direction',
        icon: 'map'
    },
    {
        id: 5,
        name: 'Share',
        icon: 'share'
    }
]

export default function ActionButton() {
    return (
        <View
            style={{
                marginTop: 5
            }}
        >
            <FlatList
                data={actionButtonList}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'space-between'
                }}
                numColumns={5}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <View
                            style={{
                                backgroundColor: Color.BackgroudButtonBlue,
                                padding: 13,
                                borderRadius: 99,
                                alignItems: 'center',
                                width: 55
                            }}
                        >
                            <Ionicons
                                name={item.icon}
                                size={23}
                                color={Color.Primary}
                            />
                        </View>
                        <Text
                            style={{
                                fontFamily: 'appfont-semibold',
                                fontSize: 16,
                                marginTop: 5
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
