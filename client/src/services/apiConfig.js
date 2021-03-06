import axios from 'axios'

let apiUrl

const apiUrls = {
    production: 'https://blogger-pawpaw.herokuapp.com/api/',
    development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.production
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

export default api