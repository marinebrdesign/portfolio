import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../pages/accueil";
import Contact from "../pages/contact";
import A_propos from "../pages/a_propos";
import CSV from "../pages/CSV";
import Norma_ludus from "../pages/norma_ludus";
import Boss_lady_gaga from "../pages/boss_lady_gaga";
import Palais_guell from "../pages/palais_guell";
import logo from "../pages/logo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil,
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },

    {
      path: '/a-propos',
      name: 'A propos',
      component: A_propos,
    },

    {
      path: '/csv',
      name: 'csv',
      component: CSV,
    },

    {
      path: '/norma_ludus',
      name: 'norma_ludus',
      component: Norma_ludus,
    },
    {
      path: '/boss_lady_gaga',
      name: 'boss_lady_gaga',
      component: Boss_lady_gaga,
    },

    {
      path: '/palais_guell',
      name: 'palais_guell',
      component: Palais_guell,
    },

    {
      path: '/logo',
      name: 'logo',
      component: logo,
    },
  ],
  scrollBehavior(to, from, savedPosition){
  return {x: 0, y: 0}
  }
})
