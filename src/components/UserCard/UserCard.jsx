import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/TechStore';

function UserCard({ user }) {
  const selectUser = useStore(state => state.selectUser);
  const navigate = useNavigate();

  const handleEdit = () => {
    selectUser(user);
    navigate('/profile');
  };

  return (
    <li>
      {user.name} - {user.email}
      <button onClick={handleEdit}>Editar</button>
    </li>
  );
}

export default UserCard;

