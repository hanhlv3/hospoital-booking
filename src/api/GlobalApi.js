import { create } from 'apisauce'

const api = create({
    baseURL: 'http://192.168.1.2:1337/api',
})

const getSlider = () => api.get('/sliders?populate=*')

const getAllCategories = () => api.get('/categories?populate=*')

const getHospitalPremiums = () => api.get('/hospitals?filters[premium][$eq]=true&populate=*') 

const getHospitalByCategory = (categoryName) => api.get(`/hospitals?filters[categories][name][$in]=${categoryName}&populate=*`)

const getDoctorByCategory = (categoryName) => api.get(`/doctors?docfilters[category][name][$in]=${categoryName}&populate=*`)

const getAllDoctor = () => api.get(`/doctors?populate=*`)

const getAllHospital = () => api.get(`/hospitals?populate=*`)

const createAppointment = (data) => api.post(`/appointments`, data)

const getUserAppointments = (email) => api.get(`/appointments?filters[email][$eq]=${email}&&populate=*`) 

export default {
    getSlider,
    getAllCategories,
    getHospitalPremiums,
    getHospitalByCategory,
    getDoctorByCategory,
    createAppointment,
    getAllHospital,
    getAllDoctor,
    getUserAppointments,
}
