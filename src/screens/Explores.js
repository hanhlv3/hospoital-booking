import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../components/shared/PageHeader'
import HospitalDoctorTab from '../components/hospitaldoctor/HospitalDoctorTab'
import HospitalListBig from '../components/hospitaldoctor/HospitalListBig'
import GlobalApi from '../api/GlobalApi'
import Color from '../shared/Color'
import DoctorList from '../components/doctor/DoctorList'

export default function Explores() {
    const [hospitalList, setHospitalList] = useState([])
    const [doctorList, setDoctorList] = useState([])
    const [activeTab, setActiveTab] = useState('hospital')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const resHospital = await GlobalApi.getAllHospital()
        const resDoctor = await GlobalApi.getAllDoctor()

        const hospitalList = resHospital.data.data.map((item) => {
            return {
                id: item.id,
                name: item.attributes.name,
                address: item.attributes.address,
                image: item.attributes.image.data.attributes.url,
                categories: item.attributes.categories.data,
                desc: item.attributes.description
            }
        })

        const doctorList = resDoctor.data.data.map((item) => {
            return {
                id: item.id,
                name: item.attributes.name,
                address: item.attributes.address,
                yearExperience: item.attributes.year_of_experience,
                avatar: item.attributes.avatar.data.attributes.url,
                category: item.attributes.category.data.attributes.name
            }
        })

        setDoctorList(doctorList)
        setHospitalList(hospitalList)
    }

    return (
        <View className="px-5">
            <Text style={{fontFamily: 'appfont-semibold', fontSize: 26}}>Explores</Text>
            <HospitalDoctorTab activeTab={(value) => setActiveTab(value)} />

            {!hospitalList?.length ? (
                <ActivityIndicator
                    size={'large'}
                    color={Color.Primary}
                    style={{ marginTop: '50%' }}
                />
            ) : activeTab === 'hospital' ? (
                <HospitalListBig hospitalList={hospitalList} />
            ) : (
                <DoctorList doctorList={doctorList} />
            )}
        </View>
    )
}
