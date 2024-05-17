import { create } from 'zustand';
import { fetchUserProfile, createTech, updateTech, deleteTech } from '../api/Api';

const useStore = create(set => ({
  user: null,
  techs: [],
  isModalOpen: false,  // Estado do modal

  setUser: (user) => {
    console.log('Setting user:', user);
    set({ user });
  },

  setTechs: (techs) => {
    console.log('Setting techs:', techs);
    set({ techs });
  },

  addTech: async (newTech) => {
    try {
      const createdTech = await createTech(newTech);
      set(state => {
        const updatedTechs = [...state.techs, createdTech];
        console.log('Updated techs after adding:', updatedTechs);
        return { techs: updatedTechs };
      });
    } catch (error) {
      console.error('Erro ao adicionar tecnologia:', error);
    }
  },

  updateTech: async (techId, updatedData) => {
    try {
      const updatedTech = await updateTech(techId, updatedData);
      set(state => {
        const updatedTechs = state.techs.map(tech => tech.id === techId ? updatedTech : tech);
        console.log('Updated techs after updating:', updatedTechs);
        return { techs: updatedTechs };
      });
    } catch (error) {
      console.error('Erro ao atualizar tecnologia:', error);
    }
  },

  removeTech: async (techId) => {
    try {
      await deleteTech(techId);
      set(state => {
        const updatedTechs = state.techs.filter(tech => tech.id !== techId);
        console.log('Updated techs after removing:', updatedTechs);
        return { techs: updatedTechs };
      });
    } catch (error) {
      console.error('Erro ao remover tecnologia:', error);
    }
  },

  fetchUserProfile: async (token) => {
    try {
      const profile = await fetchUserProfile(token);
      console.log('Fetched user profile:', profile);
      set({ user: profile, techs: profile.techs });
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  },

  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useStore;













