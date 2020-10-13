import { PATH, axios } from './index'

/**
 * 上传图片
 */
// export function upFileds (data) { return axios.post( `http://upload-z2.qiniup.com`, data, { headers: { 'Content-Type': 'multipart/form-data' } } ) }
export function upFileds (data) { return axios.post( `https://up.qiniup.com`, data, { headers: { 'Content-Type': 'multipart/form-data' } } ) }

/**
 * 获取token
 */
export function getToken (data) { return axios.post( `${PATH}/api/getQiniuToken`, data ) }

/**
 * 获取jssdk相关信息
 */
export function getConfig (data) { return axios.post( `${PATH}/api/wechat/config`, data ) }

