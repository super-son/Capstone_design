import { createRouter, createWebHistory } from "vue-router";
import SelectPage from "../views/SelectPage.vue";
import UserInfo from "../views/UserInfo.vue";
import SelectStyle from "../views/SelectStyle.vue";
import TravelStyle from "../views/TravelStyle.vue";
import KakaoMap from "../views/KakaoMap.vue";
import HowAbout from "../views/HowAbout.vue";
import TravelRoute from "../views/TravelRoute.vue";

const routes = [
  // 라우트 정의
  { path: "/", name: "SelectPage", component: SelectPage },
  { path: "/UserInfo", name: "UserInfo", component: UserInfo },
  { path: "/SelectStyle", name: "SelectStyle", component: SelectStyle },
  { path: "/TravelStyle", name: "TravelStyle", component: TravelStyle },
  { path: "/KakaoMap", name: "KakaoMap", component: KakaoMap },
  { path: "/HowAbout", name: "HowAbout", component: HowAbout },
  { path: "/TravelRoute", name: "TravelRoute", component: TravelRoute },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
