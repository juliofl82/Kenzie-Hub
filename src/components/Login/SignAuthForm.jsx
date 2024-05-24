import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate
import useStore from '../../store/TechStore'; // Certifique-se de que o caminho está correto
import axios from 'axios';
import styles from "./styles.module.scss";

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


    <div className={styles.authFormGrid}>
      <div className={styles.authFormHeader}>
        <h1>Kenzie Hub</h1>
      </div>
      <div className='acessGrid'>
        <div className={styles.authFormTitle}>
          <h2>Login</h2>
        </div>
        <div >
          <div>            
          </div>
          <form className={styles.authFormInput} onSubmit={handleSubmit}>
            <label htmlFor="emailLogin">Email</label>
            <input id='emailLogin' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <label htmlFor="passwordLogin">Senha</label>
            <input id='passwordLogin' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
            <div className={styles.buttonGrid}>
              <button className='buttonPrimay' type="submit">Entrar</button>
            <span>Ainda não possui uma conta?</span>
            <button className='buttonDisabled' onClick={() => window.location.href = '/register'}>
             Cadastre-se </button>
            </div>            
          </form>          
        </div>
      </div>

    </div>

  );
}

export default SignAuthForm;









