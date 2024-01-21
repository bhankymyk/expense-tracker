import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"

// Vue toastify
import  Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount('#app');

