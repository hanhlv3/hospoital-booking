import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../components/shared/PageHeader'
import HospitalInfo from '../components/hospital_detail/HospitalInfo'
import Color from '../shared/Color'
import { ScrollView } from 'react-native-virtualized-view'
export default function HospitalDetail() {
    const navigation = useNavigation()
    const [hospital, setHospital] = useState()
    const param = useRoute().params

    useEffect(() => {
        setHospital(param.hospital)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: Color.White }}>
            <ScrollView>
                <View style={{ position: 'absolute', zIndex: 10 }}>
                    <PageHeader title={''} />
                </View>
                <View>
                    <Image
                        source={{ uri: hospital?.image }}
                        style={{
                            width: '100%',
                            height: 260
                        }}
                    />

                    <View
                        style={{
                            marginTop: -20,
                            backgroundColor: Color.White,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 20
                        }}
                    >
                        <HospitalInfo hospital={hospital} />
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity
                style={{
                    padding: 13,
                    backgroundColor: Color.Primary,
                    margin: 10,
                    borderRadius: 99,
                    justifyContent: 'center',
                    alignItems: 'center',

                    left: 0,
                    right: 0,
                    marginBottom: 10,
                    zIndex: 20
                }}
                onPress={() => navigation.navigate('BookAppointment', {hospital: hospital})}

            >
                <Text
                    style={{
                        color: Color.White,
                        fontFamily: 'appfont-semibold',
                        fontSize: 16
                    }}
                >
                    Book Appointment
                </Text>
            </TouchableOpacity>
        </View>
    )
}
