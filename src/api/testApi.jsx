import React, { useEffect } from 'react';
import { fetchUsers } from './Api.jsx';

const TestApiComponent = () => {
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUsers();
        console.log('Dados recebidos:', data);
        // Você pode também usar o estado para mostrar os dados na UI se desejar
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      Verifique o console para os resultados da API.
    </div>
  );
};

export default TestApiComponent;
