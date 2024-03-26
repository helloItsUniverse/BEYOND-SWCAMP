import { createApp } from 'vue'
import router from './router/01_router.js'
import App from './App.vue'

/* router 설정을 하기 위해서는 다음과 같이 router를 등록해ㅐ 주어야 한다(use 활용) */
// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('#app');
