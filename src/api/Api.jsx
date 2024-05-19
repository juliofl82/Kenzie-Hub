import axios from 'axios';

// Cria uma instância do axios com a URL base da API
const api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com'
});

// Função para criar um novo usuário
export async function createUser(userData) {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error("Erro criando usuário.", error.response?.data);
    throw error;
  }
}

export const fetchTechsApi = async () => {
  const response = await api.get('/techs');
  return response.data;
};

// Função para buscar o perfil do usuário
export async function fetchUserProfile(token) {
  try {
    const response = await api.get('/profile', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro carregando o perfil do usuário.", error.response?.data);
    throw error;
  }
}

// Função para criar uma nova tecnologia
export async function createTech(techData) {
  const token = localStorage.getItem('token');
  try {
    const response = await api.post('/users/techs', techData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro adicionando tecnologia.", error.response?.data);
    throw error;
  }
}

// Função para atualizar uma tecnologia existente
export async function updateTech(techId, techData) {
  const token = localStorage.getItem('token');
  try {
    const response = await api.put(`/users/techs/${techId}`, techData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro atualizando tecnologia.", error.response?.data);
    throw error;
  }
}

// Função para deletar uma tecnologia existente
export async function deleteTech(techId) {
  const token = localStorage.getItem('token');
  try {
    await api.delete(`/users/techs/${techId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    console.error("Erro deletando tecnologia.", error.response?.data);
    throw error;
  }
}

export default api;




