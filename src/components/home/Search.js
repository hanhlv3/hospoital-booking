import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Search({ setSearchText }) {
    const [searchInput, setSearchInput] = useState()

    return (
        <View className="mt-4">
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: '0.7',
                    borderColor: '#333b35',
                    borderRadius: 8,
                    padding: 8,
                    gap: 3,
                    width: '100%'
                }}
            >
                <Ionicons name="search-outline" size={24} color="#091ce8" />
                <TextInput
                    className="text-base w-full"
                    placeholder="Search..."
                    onChangeText={(value) => setSearchInput(value)}
                    onSubmitEditing={() => setSearchText(searchInput)}
                />
            </View>
        </View>
    )
}
