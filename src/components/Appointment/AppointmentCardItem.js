import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../shared/Color'
import HorizontalLine from '../shared/HorizontalLine'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'
export default function AppointmentCardItem({ appointment }) {
    return (
        <View
            style={{
                padding: 10,
                borderWidth: 1,
                borderColor: Color.Light_Gray,
                borderRadius: 10,
                backgroundColor: Color.White,
                marginTop: 15
            }}
        >
            <Text
                style={{
                    fontFamily: 'appfont-semibold',
                    fontSize: 16,
                    marginTop: 10
                }}
            >
                {moment(appointment.attributes.Date).format('MMM Do, YYYY')} -{' '}
                {appointment.attributes.Time}
            </Text>
            <HorizontalLine />
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg'
                    }}
                    style={{ height: 105, borderRadius: 10, width: 90 }}
                />
                <View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontFamily: 'appfont-semibold'
                        }}
                    >
                        {
                            appointment.attributes.hospitals.data[0].attributes
                                .name
                        }
                    </Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5
                        }}
                    >
                        <Ionicons
                            name="location"
                            size={20}
                            color={Color.Primary}
                        />
                        <Text
                            style={{ fontFamily: 'appfont', color: Color.Gray }}
                        >
                            {
                                appointment.attributes.hospitals.data[0]
                                    .attributes.address
                            }
                        </Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5
                        }}
                    >
                        <Ionicons
                            name="document-text"
                            size={20}
                            color={Color.Primary}
                        />
                        <Text
                            style={{ fontFamily: 'appfont', color: Color.Gray }}
                        >
                            {' '}
                            Booking id: #{appointment.id}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
