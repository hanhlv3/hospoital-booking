import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Color from '../../shared/Color'
export default function DoctorCardItem({ doctor }) {
    return (
        <View
            style={{
                padding: 10,
                backgroundColor: Color.White,
                marginBottom: 10,
                borderRadius: 10,
                borderColor: Color.Light_Gray
            }}
        >
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Image
                    source={{ uri: doctor.avatar }}
                    style={{
                        width: '35%',
                        height: 110,
                        borderRadius: 10
                    }}
                />
                <View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 5,
                            padding: 5,
                            backgroundColor: Color.BackgroudButtonBlue,
                            borderRadius: '30%'
                        }}
                    >
                        <MaterialCommunityIcons
                            name="check-decagram"
                            size={16}
                            color={Color.Primary}
                        />
                        <Text
                            style={{
                                fontFamily: 'appfont-regular',
                                fontSize: 16,
                                color: Color.Primary
                            }}
                        >
                            Proffessional Doctor
                        </Text>
                    </View>
                    <View style={{ marginTop: 7 }}>
                        <Text
                            style={{
                                fontFamily: 'appfont-semibold',
                                fontSize: 16
                            }}
                        >
                            Dr.{doctor.name}
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'appfont',
                                fontSize: 14,
                                color: Color.Gray,
                                marginTop: 5,
                                marginBottom: 5
                            }}
                        >
                            {doctor.category}
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'appfont',
                                color: Color.Primary
                            }}
                        >
                            {doctor.yearExperience} Years
                        </Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={{
                    width: '100%',
                    padding: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    backgroundColor: Color.BackgroudButtonBlue,
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        fontFamily: 'appfont-bold',
                        fontSize: '16px',
                        color: Color.Primary
                    }}
                >
                    Make a Appointment
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
