import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/TechStore'; // Certifique-se de que o caminho está correto
import { createUser } from '../../api/Api'; // Importando a função createUser

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [contact, setContact] = useState('');
  const [courseModule, setCourseModule] = useState('');
  const setUser = useStore(state => state.setUser);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password, name, bio, contact, course_module: courseModule };
    try {
      const response = await createUser(userData);
      const token = response.token; // Assuming the token is returned as part of the response
      localStorage.setItem('token', token);
      setUser(response.user); // Assuming the user data is returned as part of the response
      navigate('/profile'); // Redirecionar para a página de perfil
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="auth-form">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
        <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" required />
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contato" required />
        <select value={courseModule} onChange={(e) => setCourseModule(e.target.value)} required>
          <option value="" disabled>Selecione o módulo do curso</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={() => window.location.href = '/login'}>
        Já possui uma conta? Faça login
      </button>
    </div>
  );
}

export default RegisterForm;



