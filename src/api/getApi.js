import { PATH, axios } from './index'

/**
 * 上传图片
 * @param {patentId： 专利ID字段， page： 页码， size： 每页条数}
 */
// export function upFileds (data) { return axios.post( `http://upload-z2.qiniup.com`, data, { headers: { 'Content-Type': 'multipart/form-data' } } ) }
export function upFileds (data) { return axios.post( `https://up.qiniup.com`, data, { headers: { 'Content-Type': 'multipart/form-data' } } ) }

/**
 * 获取token
 * @param {patentId： 专利ID字段， page： 页码， size： 每页条数}
 */
export function getToken (data) { return axios.post( `${PATH}/api/getQiniuToken`, data ) }