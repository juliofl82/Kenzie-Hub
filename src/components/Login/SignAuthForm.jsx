import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate
import useStore from '../../store/TechStore'; // Certifique-se de que o caminho está correto
import axios from 'axios';

function SignAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useStore(state => state.setUser);
  const navigate = useNavigate();  // Inicializar useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://kenziehub.herokuapp.com/sessions';
    try {
      const response = await axios.post(url, { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setUser(response.data.user);
      navigate('/profile');  // Redirecionar para a página de perfil
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <button onClick={() => window.location.href = '/register'}>
        Ainda não possui uma conta? Cadastre-se
      </button>
    </div>
  );
}

export default SignAuthForm;









