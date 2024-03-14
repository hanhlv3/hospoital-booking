import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../../shared/Color'
import SubHeading from '../shared/SubHeading'
import moment from 'moment'
import { useUser } from '@clerk/clerk-expo'
import GlobalApi from '../../api/GlobalApi'

export default function BookingSection({ hospital }) {
    const { isLoaded, isSignedIn, user } = useUser()

    const [nextSevenDays, setnextSevenDays] = useState([])
    const [timeList, setTimList] = useState([])
    const [selectedDate, setSelectedDate] = useState()
    const [selectedTime, setSelectedTime] = useState()
    const [note, setNote] = useState()

    useEffect(() => {
        getDays()
        getTimes()
    }, [])

    const getDays = () => {
        const today = moment()
        const nextSevenDays1 = []
        for (let i = 1; i < 8; i++) {
            const date = moment().add(i, 'days')
            nextSevenDays1.push({
                date: date.add(i, 'days'),
                day: date.format('ddd'), // Tue, Mon
                formatedDate: date.format('Do MMM') // 4th Oct
            })
        }

        setnextSevenDays(nextSevenDays1)
    }

    const getTimes = () => {
        const timeList = []
        for (let i = 8; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })

            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })

            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimList(timeList)
    }

    const bookAppointment = async () => {
        const data = {
            data: {
                UserName: user.fullName,
                Date: selectedDate,
                Time: selectedTime,
                Email: user.primaryEmailAddress.emailAddress,
                hospitals: hospital.id,
                Note: note
            }
        }
        const res = await GlobalApi.createAppointment(data)
        setNote('')
    }

    return (
        <View>
            <Text style={{ fontSize: 16, color: Color.Gray, marginBottom: 10 }}>
                Book Appointment
            </Text>

            <SubHeading title={'Day'} seeAll={false} />

            <FlatList
                data={nextSevenDays}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.dayButton,
                            { paddingVertical: 10 },
                            selectedDate == item.date
                                ? { backgroundColor: Color.Primary }
                                : null
                        ]}
                        onPress={() => setSelectedDate(item.date)}
                    >
                        <Text
                            style={[
                                {
                                    fontFamily: 'appfont'
                                },
                                selectedDate == item.date
                                    ? { color: Color.White }
                                    : null
                            ]}
                        >
                            {item.day}
                        </Text>
                        <Text
                            style={[
                                {
                                    fontFamily: 'appfont-semibold',
                                    fontSize: 16
                                },
                                selectedDate == item.date
                                    ? { color: Color.White }
                                    : null
                            ]}
                        >
                            {item.formatedDate}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <SubHeading title={'Time'} seeAll={false} />
            <FlatList
                data={timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.dayButton,
                            { paddingVertical: 16 },
                            selectedTime == item.time
                                ? { backgroundColor: Color.Primary }
                                : null
                        ]}
                        onPress={() => setSelectedTime(item.time)}
                    >
                        <Text
                            style={[
                                {
                                    fontFamily: 'appfont-semibold',
                                    fontSize: 16
                                },
                                selectedTime == item.time
                                    ? { color: Color.White }
                                    : null
                            ]}
                        >
                            {item.time}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <SubHeading title={'Note'} seeAll={false} />
            <TextInput
                onChangeText={(text) => setNote(text)}
                numberOfLines={5}
                style={{
                    backgroundColor: Color.Light_Gray,
                    padding: 10,
                    borderRadius: 10,
                    borderColor: Color.BackgroudButtonBlue,
                    borderWidth: 1,
                    marginTop: 10,
                    textAlignVertical: 'top'
                }}
                placeholder="Write a note here..."
            />

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
                onPress={() => bookAppointment()}
            >
                <Text
                    style={{
                        color: Color.White,
                        fontFamily: 'appfont-semibold',
                        fontSize: 16
                    }}
                >
                    Make Appointment
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dayButton: {
        borderWidth: 1,
        borderRadius: 99,
        paddingHorizontal: 20,
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 20,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderColor: Color.Gray
    }
})
