import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

function setToken(token) {
    if (token) {
        localStorage.setItem('token', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
    }
}

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default {
    async login(email, senha) {
        const response = await api.post('/auth/login', { email, senha });
        setToken(response.data.token);
        return response.data;
    },

    async register(nome, email, senha) {
        const response = await api.post('/auth/register', { nome, email, senha });
        return response.data;
    },

    async getCursos() {
        const response = await api.get('/curso');
        return response.data;
    },

    async getModulosByCursoId(idCurso) {
        const response = await api.get(`/modulo/curso/${idCurso}`);
        return response.data;
    },

    async getLicoesByModuloId(idModulo) {
        const response = await api.get(`/licao/modulo/${idModulo}`);
        return response.data;
    },

    async getAtividades() {
        const response = await api.get('/teste');
        return response.data;
    },

    async getAtividadesById(idTeste) {
        const response = await api.get(`/teste/${idTeste}`);
        return response.data;
    },

    logout() {
        setToken(null);
        localStorage.removeItem('user');
    },

    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
};
