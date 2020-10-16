import loadings from './loading.vue';

const loading = {
    install:function(Vue) {
        Vue.component('Loading', loadings)
    }
}

export default loading