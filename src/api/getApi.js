import { PATH, axios } from './index'



/**
 * 登录
 */
export function login (data) { return axios.post( `${PATH}/api/wechat/login`, data ) }

/**
 * 获取医院列表
 */
export function getListByCon (data) {
    let arr = []
    for (let i in data) { arr.push(`${i}=${data[i]}`) }
    return axios.get( `${PATH}/api/hospital/getListByCon?${arr.join('&')}`, data )
}

/**
 * 根据id获取产品详细内容
 */
export function getById (data) {
    let arr = []
    for (let i in data) { arr.push(`${i}=${data[i]}`) }
    return axios.get( `${PATH}/api/product/getById?${arr.join('&')}`, data )
}

/**
 * 申请投保
 */
export function apply (data) { return axios.post( `${PATH}/api/insureOrder/apply`, data ) }

/**
 * 上传图片
 */
export function upFileds (data) { return axios.post( `http://upload-z2.qiniup.com`, data, { headers: { 'Content-Type': 'multipart/form-data' } } ) }

/**
 * 获取token
 */
export function getToken (data) { return axios.post( `${PATH}/api/getQiniuToken`, data ) }

/**
 * 获取jssdk相关信息
 */
export function getConfig (data) { return axios.post( `${PATH}/api/wechat/config`, data ) }

/**
 * 获取图形验证码接口
 */
export function getCaptcha (data) { return axios.post( `${PATH}/api/captcha`, data ) }


/**
 * 获取手机号验证码
 */
export function getSend (data) { return axios.post( `${PATH}/api/verify/send`, data ) }

/**
 * 校验手机号
 */
export function checkPhonenum (data) { return axios.post( `${PATH}/api/insureOrder/checkPhonenum`, data ) }




