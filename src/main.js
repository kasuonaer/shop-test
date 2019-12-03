//入口文件
import Vue from 'vue';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import App from './App.vue';

import '../static/Mui/css/mui.css';
import '../static/icon/style.css'

new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    components:{App},
    template: '<App/>'
})




