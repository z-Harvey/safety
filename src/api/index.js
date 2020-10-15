const PATH = 'http://ywdapi.programdoglovelaugh.top'
// const PATH = '/api'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export { PATH, axios }