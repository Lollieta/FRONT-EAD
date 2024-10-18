import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';
import ApiService from './services/apiService';
import Cursos from './components/Cursos.vue';
import Certificados from './components/Certificados.vue';
import Atividades from './components/Atividades.vue';
import Forum from './components/Forum.vue';
import Modulos from './components/Modulos.vue';
import Licoes from './components/Licoes.vue';

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home, meta: { requiresAuth: true } },
    { path: '/cursos', component: Cursos, meta: { requiresAuth: true } },
    { path: '/certificados', component: Certificados, meta: { requiresAuth: true } },
    { path: '/atividades', component: Atividades, meta: { requiresAuth: true } },
    { path: '/forum', component: Forum, meta: { requiresAuth: true } },
    { path: '/modulos/:idcurso', component: Modulos, meta: { requiresAuth: true } },
    { path: '/licoes/:idmodulo', component: Licoes, meta: { requiresAuth: true } },
    { path: '/forum', component: Forum, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', redirect: '/login' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !ApiService.isLoggedIn()) {
        next('/login');
    } else {
        next();
    }
});

export default router;
