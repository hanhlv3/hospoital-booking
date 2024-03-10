import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HospitalCardItem from '../shared/HospitalCardItem'
import { useNavigation } from '@react-navigation/native'

export default function HospitalListBig({ hospitalList }) {
    
    const navigation = useNavigation()
    return (
        <View style={{marginTop: 15}}>
            <FlatList 
                data={hospitalList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('HospitalDetail', { hospital: item })}>
                        <HospitalCardItem hospital={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
