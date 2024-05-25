import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/TechStore'; // Certifique-se de que o caminho está correto
import { createUser } from '../../api/Api'; // Importando a função createUser
import styles from "./styles.module.scss";

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
    <div >
      <div className={styles.registerHeader}>
        <h1>Kenzie Hub</h1>
        <button className='buttonDisabledHover' onClick={() => window.location.href = '/login'}>
          Voltar
        </button>
      </div>
      <div className="registerGrid">
        <div className='registerTitle'>
          <h2>Crie sua conta</h2>
          <span className={styles.spanRegister}>Rápido e grátis, vamos nessa</span>
        </div>
        <section >
          <form onSubmit={handleSubmit}>
            <div className={styles.registerFormInput}>
              <label htmlFor="registerName">Nome</label>
            <input id='registerName' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite aqui seu nome" required />
            <label htmlFor="registerEmail">Email</label>
            <input id='registerEmail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite aqui seu email" required />
            <label htmlFor="registerPassword">Senha</label>
            <input id='registerPassword' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite aqui sua senha" required />
            <label htmlFor="registerBio">Bio</label>
            <input id='registerBio' type="text" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Fale sobre você" required />
            <label htmlFor="registerContact">Contato</label>
            <input id='registerContact' type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Opção de contato" required />
            <label htmlFor="registerSelect">Selecionar módulo</label>
            <select id='registerSelect' value={courseModule} onChange={(e) => setCourseModule(e.target.value)} required>              
              <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
              <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
              <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
              <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
            </div>            
            <div className={styles.buttonGrid}>
              <button className='buttonPrimay' type="submit">Cadastrar</button>
            </div>
          </form>
        </section>        
      </div>
    </div>
  );
}

export default RegisterForm;




