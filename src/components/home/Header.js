import { View, Text, Image } from 'react-native'
import React from 'react'

import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
    const { isLoaded, isSignedIn, user } = useUser()

    if (!isLoaded || !isSignedIn) {
        return null
    }

    return (
        <View className="d-flex flex-row items-center justify-between">
            <View className="d-flex flex-row gap-1 items-center">
                <Image
                    className="w-11 h-11 rounded-full"
                    source={{ uri: user.imageUrl }}
                />
                <View>
                    <Text style={{fontFamily: 'appfont'}}>Hello, 👋</Text>
                    <Text className="text-lg font-bold">{user.fullName}</Text>
                    
                </View>
            </View>
            <Ionicons name="notifications-outline" size={28} color="black" />
        </View>
    )
}
