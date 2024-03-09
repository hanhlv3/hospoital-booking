import { View, Text, Image } from 'react-native'
import React from 'react'
import Color from '../../shared/Color'

export default function HospitalItem({ hospital }) {
    return (
        <View
            style={{
                width: 200,
                borderWidth: 1,
                borderColor: Color.Light_Gray,
                borderRadius: 10,
                marginRight: 15
            }}
        >
            <Image
                source={{ uri: hospital.image }}
                style={{
                    width: '100%',
                    height: 110,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                }}
            />

            <View
                style={{
                    padding: 7
                }}
            >
                <Text
                    style={{
                        fontFamily: 'appfont-semibold',
                        fontSize: 16,
                        marginBottom: 1
                    }}
                >
                    {hospital.name}
                </Text>
                <Text style={{ color: Color.Gray }}>{hospital.address}</Text>
            </View>
        </View>
    )
}
