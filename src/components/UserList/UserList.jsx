import React, { useEffect } from 'react';
import useStore from '../../store/TechStore';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const { users, fetchUsers, user } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name}
            {user && u.id === user.id && (
              <>
                (Você)
                <button onClick={() => navigate('/profile')}>Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;






