import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import Color from '../../shared/Color'
import ActionButton from './ActionButton'
import SubHeading from '../shared/SubHeading'

export default function HospitalInfo({ hospital }) {
    return (
        hospital && (
            <View>
                <Text style={{ fontSize: 23, fontFamily: 'appfont-semibold' }}>
                    {hospital.name}
                </Text>
                <FlatList
                    data={hospital.categories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Text
                            style={{
                                marginRight: 10,
                                color: Color.Gray
                            }}
                        >
                            {item.attributes.name}
                        </Text>
                    )}
                />

                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: Color.Light_Gray,
                        margin: 5,
                        marginBottom: 10
                    }}
                ></View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        paddingEnd: 10
                    }}
                >
                    <Ionicons name="location" size={22} color={Color.Primary} />
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'appfont',
                            color: Color.Gray
                        }}
                    >
                        {hospital.address}
                    </Text>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        paddingEnd: 10,
                        marginTop: 3
                    }}
                >
                    <Ionicons
                        name="time-sharp"
                        size={22}
                        color={Color.Primary}
                    />
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'appfont',
                            color: Color.Gray
                        }}
                    >
                        Mon Sun | 11AM - 8PM
                    </Text>
                </View>

                <ActionButton />

                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: Color.Light_Gray,
                        margin: 5,
                        marginTop: 15
                    }}
                ></View>

                <SubHeading title={'About'} />
                <Text>{hospital.desc}</Text>
            </View>
        )
    )
}
