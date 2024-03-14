import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalApi from '../../api/GlobalApi'

import HospitalItem from './HospitalItem'
import { useNavigation } from '@react-navigation/native'

export default function PremiumHospitals() {
    const [premiumHospitals, setPremiumHospitals] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        getHospitalPremiums()
    }, [])

    const getHospitalPremiums = async () => {
        const res = await GlobalApi.getHospitalPremiums()

        const reslut = res.data.data.map((item) => {
            return {
                id: item.id,
                name: item.attributes.name,
                address: item.attributes.address,
                image: item.attributes.image.data.attributes.url,
                categories: item.attributes.categories.data
            }
        })

        setPremiumHospitals(reslut)
    }

    if (premiumHospitals.length === 0) return null

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
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontFamily: 'appfont-semibold',
                        fontSize: 20,
                        color: '#000000'
                    }}
                >
                    Our Premium Hospitals
                </Text>
                <Text
                    style={{
                        fontFamily: 'appfont',
                        fontWeight: 'bold',
                        color: 'blue'
                    }}
                >
                    See All
                </Text>
            </View>

            <FlatList
                data={premiumHospitals}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('HospitalDetail', {hospital: item})}>

                        <HospitalItem hospital={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
