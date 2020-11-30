import { PATH, axios } from './index'

/**
 * 申请商务服务
 */
export function create (data) { return axios.post( `${PATH}/api/business/create`, data ) }

/**
 * 根据用户获取是否申请过服务
 */
export function getByUserId (data) {
    let arr = []
    for (let i in data) { arr.push(`${i}=${data[i]}`) }
    return axios.get( `${PATH}/api/business/getByUserId?${arr.join('&')}`, data )
}

/**
 * 修改商务服务信息
 */
export function edit (data) { return axios.post( `${PATH}/api/business/edit`, data ) }
