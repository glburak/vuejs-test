import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jquery from '/src/vendors/jquery/dist/jquery.min.js'
import bootstrap2 from '/src/vendors/bootstrap/dist/js/bootstrap.min.js'
import fastclick from '/src/vendors/fastclick/lib/fastclick.js'
import nprogress from '/src/vendors/nprogress/nprogress.js'
import jqueryConcat from '/src/vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
import custom from '/src/build/js/custom.min.js'
const app = createApp(App)

app.use(jquery)
app.use(bootstrap2)
app.use(fastclick)
app.use(nprogress)
app.use(jqueryConcat)
app.use(custom)
app.use(router)

app.mount('#app')
