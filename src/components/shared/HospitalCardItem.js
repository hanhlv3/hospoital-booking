import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../shared/Color'
import { Ionicons } from '@expo/vector-icons'

export default function HospitalCardItem({ hospital }) {
    return (
        <View style={{ borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: Color.Light_Gray }}>
            <Image
                source={{ uri: hospital.image }}
                style={{
                    width: '100%',
                    height: 140,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                }}
            />

            <View
                style={{
                    padding: 10,
                    backgroundColor: Color.White,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10
                }}
            >
                <Text
                    style={{
                        fontFamily: 'appfont-semibold',
                        fontSize: 18
                    }}
                >
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
                        gap: 5
                    }}
                >
                    <Ionicons name="location" size={20} color={Color.Primary} />
                    <Text>{hospital.address}</Text>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        marginTop: 4
                    }}
                >
                    <Ionicons
                        name="eye-sharp"
                        size={20}
                        color={Color.Primary}
                    />
                    <Text>665 views</Text>
                </View>
            </View>
        </View>
    )
}


