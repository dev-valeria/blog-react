//CSS
import { useAuthentication } from '../../hooks/useAuthentication';

import { useState, useEffect } from 'react'
//CSS
import styles from './Login.module.css'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")

    const user = {
      email,
      password
    };
    const res = await login(user)
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])
  return (
    <div className={styles.login}>
     <h1>Entrar</h1>
      <p>Faca o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
         <label>
          <span>Email: </span>
          <input type="email"
            name='email'
            required placeholder='E-mail do usuario'
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </label>
        <label>
          <span>Senha: </span>
          <input type="password"
            name='password'
            required placeholder='Insira sua senha'
            value={password}
            onChange={(e) => setpassword(e.target.value)}  
          />
        </label>
        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn'>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login