import { View, Text, Image } from 'react-native'
import React from 'react'
import Color from '../../shared/Color'
import { Ionicons } from '@expo/vector-icons'
import HorizontalLine from '../shared/HorizontalLine'

export default function AppointmentHospital({ hospital }) {
    return (
        <View>
            <View
                style={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 15,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={{ uri: hospital.image }}
                    style={{ width: 100, height: 100, borderRadius: 99 }}
                />
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'appfont-semibold',
                            marginBottom: 8
                        }}
                    >
                        {hospital.name}
                    </Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingEnd: 10
                        }}
                    >
                        <Ionicons
                            name="location"
                            size={22}
                            color={Color.Primary}
                        />
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: 'appfont',
                                color: Color.Gray,
                                width: '70%'
                            }}
                        >
                            {hospital.address}
                        </Text>
                    </View>
                </View>
            </View>
            <HorizontalLine />
        </View>
    )
}
