import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DoctorCardItem from '../shared/DoctorCardItem'

export default function DoctorList({doctorList}) {
  return (
    <View style={{marginTop: 15}}>
      <FlatList 
        data={doctorList}
        renderItem={({ item }) => (
          <DoctorCardItem doctor={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})