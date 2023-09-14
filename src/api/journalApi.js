import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-3fc5b-default-rtdb.firebaseio.com'
})

export default journalApi