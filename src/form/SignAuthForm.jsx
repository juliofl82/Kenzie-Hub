import { useState } from 'react';
import useStore from '../store/TechStore'; // Certifique-se de que o caminho está correto
import axios from 'axios';

function SignAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const setUser = useStore(state => state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister ? 'https://api.example.com/users' : 'https://api.example.com/login';
    const data = isRegister ? { email, password, name: 'John Doe', bio: 'Lorem ipsum', contact: 'linkedin/in/johndoe', course_module: 'Segundo Módulo (Frontend avançado)' } : { email, password };
    try {
      const response = await axios.post(url, data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setUser(response.data.user);
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div className="auth-form">
      <h2>{isRegister ? 'Cadastro' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <button type="submit">{isRegister ? 'Cadastrar' : 'Entrar'}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Já possui uma conta? Faça login' : 'Ainda não possui uma conta? Cadastre-se'}
      </button>
    </div>
  );
}

export default SignAuthForm;

