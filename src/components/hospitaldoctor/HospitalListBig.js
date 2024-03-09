import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HospitalCardItem from '../shared/HospitalCardItem'

export default function HospitalListBig({ hospitalList }) {
    
    return (
        <View style={{marginTop: 15}}>
            <FlatList 
                data={hospitalList}
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        <HospitalCardItem hospital={item} />
                    </TouchableOpacity>
                   
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
