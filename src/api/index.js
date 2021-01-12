// const PATH = 'http://ywdapi.programdoglovelaugh.top'
// const PATH = 'http://api.oned-medical.com' // 正式
const PATH = 'http://ywd.oned-medical.com' // 测试

// const PATH = '/api'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export { PATH, axios }