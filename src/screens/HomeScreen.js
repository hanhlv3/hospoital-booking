import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { dummyMessages } from '../constants'
import Features from '../components/Features'
   
export default function HomeScreen() {
    const [message, setMessage] = useState(dummyMessages)
    const [recording, setRecording] = useState(false)
    const [speaking, setSpeaking] = useState(false)

    // const stopSpeaking = () => {
    //     setSpeaking(false)
    // }

    // const speechStartHandler = e=> {
    //     console.log('speech started');
    // }

    // const speechEndHandler = e=> {
    //     setRecording(false)
    //     console.log('speech started');
    // }

    // const speechErrorHandler = e=> {
    //     console.log('voice error', e);
    // }

    // const speechResultHandler = e=> {
    //     console.log('voice event ', e);
    // }

    // const startRecording = async  () => {
    //     setRecording(true)
    //     try {
    //         await Voice.start('en-GB') // en-US
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const stopRecording = async  () => {

    //     try {
    //         await Voice.stop() // en-US
    //         setRecording(true)

    //         // fecth response

    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     Voice.onSpeechStart = speechStartHandler
    //     Voice.onSpeechEnd = speechEndHandler
    //     Voice.onSpeechError = speechErrorHandler
    //     Voice.onSpeechResults = speechResultHandler

    //     return () => {
    //         Voice.destroy().then(Voice.removeAllListeners)
    //     }
    // }, [])

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1 flex mx-5 my-4">
                {/* bot icon */}
                <View className="flex-row justify-center">
                    <Image
                        source={require('../../assets/images/bot.png')}
                        style={{ height: hp(15), width: hp(15) }}
                    />
                </View>

                {/* feature || message */}
                {message.length > 0 ? (
                    <View className="space-y-2 flex-1">
                        <Text
                            style={{ fontSize: wp(5) }}
                            className="text-gray-700 font-semibold ml-1"
                        >
                            Assistant
                        </Text>

                        <View
                            style={{ height: hp(58) }}
                            className="bg-neutral-200 rounded-3xl p-4"
                        >
                            <ScrollView
                                bounces={false}
                                className="space-y-4"
                                showsVerticalScrollIndicator={false}
                            >
                                {message.map((message, index) => {
                                    if (message.role === 'assistant') {
                                        if (message.content.includes('https')) {
                                            // ist an ai image
                                            return (
                                                <View
                                                    key={index}
                                                    className="flex-row justify-start"
                                                >
                                                    <View
                                                        style={{ with: wp(70) }}
                                                        className="bg-emerald-100 rounded-xl p-2 rounded-tl-none"
                                                    >
                                                        <Image
                                                            source={{
                                                                uri: message.content
                                                            }}
                                                            className="rounded-2xl"
                                                            resizeMode="contain"
                                                            style={{
                                                                height: wp(60),
                                                                width: wp(60)
                                                            }}
                                                        />
                                                    </View>
                                                </View>
                                            )
                                        } else {
                                            // text
                                            return (
                                                <View
                                                    key={index}
                                                    className="flex-row justify-start"
                                                >
                                                    <View
                                                        style={{ with: wp(70) }}
                                                        className="bg-emerald-100 rounded-xl p-2 rounded-tl-none"
                                                    >
                                                        <Text>
                                                            {message.content}
                                                        </Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    } else {
                                        // user
                                        return (
                                            <View
                                                key={index}
                                                className="flex-row justify-end"
                                            >
                                                <View
                                                    style={{ with: wp(70) }}
                                                    className="bg-white rounded-xl p-2 rounded-tr-none"
                                                >
                                                    <Text>
                                                        {message.content}
                                                    </Text>
                                                </View>
                                            </View>
                                        )
                                    }
                                })}
                            </ScrollView>
                        </View>
                        {/* recording, clear and stop buttons */}
                        <View className="flex justify-center items-center">
                            {recording ? (
                                // stop recording
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/images/voiceLoading.gif')}
                                        className="rounded-full"
                                        style={{
                                            width: hp(10),
                                            height: hp(10)
                                        }}
                                    />
                                </TouchableOpacity>
                            ) : (
                                // Start recording
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/images/recordingIcon.png')}
                                        className="rounded-full"
                                        style={{
                                            width: hp(10),
                                            height: hp(10)
                                        }}
                                    />
                                </TouchableOpacity>
                            )}

                            {/* clear */}
                            {message.length > 0 && (
                                <TouchableOpacity
                                    className="bg-neutral-400 rounded-3xl p-2 absolute right-10"
                                    onPress={() => setMessage([])}
                                >
                                    <Text className="text-white font-semibold">
                                        Clear
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                ) : (
                    <Features />
                )}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({})
