import { create } from 'zustand';
import axios from 'axios';

const useStore = create(set => ({
  user: null,
  setUser: (user) => {
    console.log('Setting user:', user);
    set({ user });
  },
  techs: [],
  setTechs: (techs) => {
    console.log('Setting techs:', techs);
    set({ techs });
  },
  addTech: (newTech) => set((state) => {
    console.log('Adding tech:', newTech);
    const updatedTechs = [...state.techs, newTech];
    console.log('Updated techs after adding:', updatedTechs);
    return { techs: updatedTechs };
  }),
  removeTech: (techId) => set((state) => {
    console.log('Removing tech with ID:', techId);
    const updatedTechs = state.techs.filter(tech => tech.id !== techId);
    console.log('Updated techs after removing:', updatedTechs);
    return { techs: updatedTechs };
  }),
  fetchUserProfile: async (token) => {
    try {
      const response = await axios.get('https://api.example.com/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Fetched user profile:', response.data);
      set({ user: response.data, techs: response.data.techs });
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  },
}));

export default useStore;




