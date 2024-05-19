import { create } from 'zustand';
import { fetchUserProfile, createTech, updateTech, deleteTech } from '../api/Api';

const useStore = create((set, get) => ({
  user: null,
  techs: [],
  isModalOpen: false,  // Estado do modal

  setUser: (user) => {
    console.log('Setting user:', user);
    set({ user, techs: user.techs });
  },

  addTech: async (newTech) => {
    try {
      const state = get();
      // Verificação para garantir que a tecnologia não está sendo adicionada repetidamente
      const existingTech = state.techs.find((tech) => tech.title === newTech.title);
      if (existingTech) {
        throw new Error('User Already have this technology created, you can only update it');
      }

      const createdTech = await createTech(newTech);
      set((state) => {
        const updatedTechs = [...state.techs, createdTech];
        console.log('Updated techs after adding:', updatedTechs);
        return { techs: updatedTechs };
      });
    } catch (error) {
      console.error('Erro ao adicionar tecnologia:', error);
      throw error;
    }
  },

  updateTech: async (techId, updatedData) => {
    try {
      const updatedTech = await updateTech(techId, updatedData);
      set((state) => {
        const updatedTechs = state.techs.map((tech) => (tech.id === techId ? updatedTech : tech));
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
      set((state) => {
        const updatedTechs = state.techs.filter((tech) => tech.id !== techId);
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

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, techs: [] });
  },
}));

export default useStore;



























