import { PATH, axios } from './index'

/**
 * 查询评论列表
 * @param {patentId： 专利ID字段， page： 页码， size： 每页条数}
 */
export function listData (data) { return axios.post( `${PATH}/libComment/listData`, data ) }