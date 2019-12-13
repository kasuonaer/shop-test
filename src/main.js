//入口文件
import Vue from 'vue';

import router from './router'

//ajax
import resource from 'vue-resource';
Vue.use(resource);

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost/test/tp5/public/index.php'
Vue.prototype.$axios= axios

//mint
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import App from './App.vue';

//router组件
import '../static/Mui/css/mui.css';
import '../static/icon/style.css'
import '../static/icon/icons-extra.css'


new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    router,
    components:{App},
    template: '<App/>'
})




