import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../components/shared/PageHeader'
import GlobalApi from '../api/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import AppointmentCardItem from '../components/Appointment/AppointmentCardItem'

export default function Appoiment() {
    const { user } = useUser()

    const [appointmentList, setAppointmentList] = useState([])

    useEffect(() => {
        getUserAppointments()
    }, [user])

    const getUserAppointments = async () => {
        const res = await GlobalApi.getUserAppointments(
            user.primaryEmailAddress.emailAddress
        )
        const data = res.data.data
        setAppointmentList(data)
    }

    return (
        <View style={{ padding: 20 }}>
            <PageHeader title={'My Appointments'} backButton={false} />
            <FlatList
                data={appointmentList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <AppointmentCardItem appointment={item} />
                )}
            />
        </View>
    )
}
