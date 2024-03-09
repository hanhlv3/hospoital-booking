import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Color from '../../shared/Color'
export default function HospitalDoctorTab({activeTab}) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <View
            style={{
                marginTop: 10
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    style={[
                        activeIndex === 0 ? style.activeTab : style.inActiveTab
                    ]}
                    onPress={() => {
                        setActiveIndex(0)
                        activeTab('hospital')
                    }}
                >
                    <Text
                        style={[
                            activeIndex === 0
                                ? style.activeText
                                : style.unActiveText
                        ]}
                    >
                        Hospital
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        activeIndex === 1 ? style.activeTab : style.inActiveTab
                    ]}
                    onPress={() => {
                        setActiveIndex(1)
                        activeTab('doctor')
                    }}
                >
                    <Text
                        style={[
                            activeIndex === 1
                                ? style.activeText
                                : style.unActiveText
                        ]}
                    >
                        Doctor
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    activeText: {
        textAlign: 'center',
        fontFamily: 'appfont',
        fontSize: 18,
        color: Color.Primary
    },
    unActiveText: {
        textAlign: 'center',
        fontFamily: 'appfont',
        fontSize: 18,
        color: Color.Gray
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: Color.Primary,
        padding: 3
    },
    inActiveTab: {
        borderBottomWidth: 1,
        borderBottomColor: Color.Gray,
        padding: 3
    }
})
