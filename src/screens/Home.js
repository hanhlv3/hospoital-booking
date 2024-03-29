import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Search from '../components/home/Search'
import Slider from '../components/home/Slider'
import Categories from '../components/home/Categories'
import PremiumHospitals from '../components/home/PremiumHospitals'

export default function Home() {
  return (
    <View className="p-5">
      <Header />
      <Search setSearchText={(value) => console.log(value)} />
      <Slider />
      <Categories />
      <PremiumHospitals />
    </View>
  )
}

const styles = StyleSheet.create({})