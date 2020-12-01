import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        erwei: '',
		VfromData: {
            is_self_insure: 0,
            product_name: '',
            insure_name: '', // 投保人姓名
            insure_card: '', // 投保人身份证号码
            insure_phonenum: '', // 投保人手机号
            give_insure_name: '', // 被保人名称
            give_insure_card: '', // 被保人身份证号
            give_insure_phonenum: '' // 被保人手机号
        },
        imgList: []
	},
	mutations: {
		cheImgList (state, data) {
            state.imgList = data
        },
		cheErwei (state, data) {
            state.imgList = data
        }
	}
})

export default store