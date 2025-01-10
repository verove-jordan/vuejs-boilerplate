import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';
// import PrimeVue from 'primevue/config';
// import "primevue/resources/themes/saga-blue/theme.css"; //theme
// import "primevue/resources/primevue.min.css"; //core CSS
// import "primeicons/primeicons.css"; //icons
// import Material from '@primevue/themes/material';
// import TreeSelect from 'primevue/treeselect';

import { createI18n } from 'vue-i18n';
import en from './i18n/en';
import fr from './i18n/fr';

import './styles/fonts.css';

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// import VueVideoPlayer from '@videojs-player/vue'
// import "video.js/dist/video-js.css";
// import "vue-video-player/src/custom-theme.css";
// import "videojs-flash";
// import "videojs-contrib-hls/dist/videojs-contrib-hls";

const storedLocale = localStorage.getItem('language');
// @ts-ignore
const userLocale = navigator.language || navigator.userLanguage;
const defaultLocale = ['en', 'fr'].includes(userLocale) ? userLocale : 'fr';
const initialLocale = storedLocale || defaultLocale;

const i18n = createI18n({
    locale: initialLocale, // use stored locale or default
    messages: {
      en,
      fr,
    },
  });

// Add theme initialization
const storedTheme = localStorage.getItem('color-theme') || 'light'; // Assume 'light' as default
document.documentElement.classList.add(storedTheme);

const head = createHead()
const app = createApp(App)

// app.use(Antd);

app.use(createPinia())
app.use(i18n);
app.use(router)
app.use(head)
// app.use(PrimeVue, {
//   theme: {
//     preset: Material
//   }
// })
// app.component('TreeSelect', TreeSelect);
// app.use(VueVideoPlayer)

app.mount('#app')
