import axios from "axios";

const api = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com/',
});


// Carrega lista de usuarios
export const fetchUsers = async (page = 1, perPage = 15, tech = '') => {
    try {
        const response = await api.get(`/users?page=${page}&perPage=${perPage}&tech=${tech}`);
        return response.data;
    } catch (error) {
        console.error("Erro carregando usuarios.", error);
        throw error;
    }
};

//  Carrega o perfil logado
export const fetchUserProfile = async (token) => {
    try {
        const response = await api.get(`/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Erro carregando o perfil do usuário.", error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error("Erro criando usuário.", error.response.data);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/sessions', credentials);
        return response.data;
    } catch (error) {
        console.error("Erro no login.", error.response.data);
        throw error;
    }
};

export default api;