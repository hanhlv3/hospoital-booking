import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Search from '../components/home/Search'

export default function Home() {
  return (
    <View className="p-5">
      <Header />
      <Search setSearchText={(value) => console.log(value)} />
    </View>
  )
}

const styles = StyleSheet.create({})