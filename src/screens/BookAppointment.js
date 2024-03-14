import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AppointmentHospital from '../components/BookAppointment/AppointmentHospital'
import PageHeader from '../components/shared/PageHeader'
import ActionButton from '../components/hospital_detail/ActionButton'
import HorizontalLine from '../components/shared/HorizontalLine'
import BookingSection from '../components/BookAppointment/BookingSection'
import { ScrollView } from 'react-native-virtualized-view'

export default function BookAppointment() {
    const param = useRoute().params
    return (
        <ScrollView style={{ padding: 20 }}>
            <PageHeader title={'Book Appointment'} />
            <AppointmentHospital hospital={param.hospital} />
            <ActionButton />
            <HorizontalLine />
            <BookingSection hospital={param.hospital} />
        </ScrollView>
    )
}
