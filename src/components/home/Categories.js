import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalApi from '../../api/GlobalApi'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {


    const navigation = useNavigation()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const res = (await GlobalApi.getAllCategories()).data
        const result = res.data.map((item) => {
            return {
                id: item.id,
                name: item.attributes.name,
                icon: item.attributes.icon.data.attributes.url
            }
        })
        setCategories(result)
    }

    const CategoryItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    alignItems: 'center'
                }}
                onPress={() => navigation.navigate('HospitalDoctor', {
                    categoryName: item.name
                })}
            >
                <View
                    style={{
                        backgroundColor: '#dbeafe',
                        padding: 15,
                        borderRadius: 99
                    }}
                >
                    <Image
                        source={{ uri: item.icon }}
                        style={{ width: 30, height: 30 }}
                    />
                </View>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    if (categories.length === 0) {
        return null // Render nothing if the sliders array is empty
    }

    return (
        <View style={{ marginTop: 5 }}>
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
                    Doctor Speciality
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
                style={{ marginTop: 7 }}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                data={categories}
                numColumns={4}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) =>
                    index < 4 && <CategoryItem item={item} />
                }
            />
        </View>
    )
}
