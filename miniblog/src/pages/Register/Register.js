//CSS
import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Register.module.css';

import { useState, useEffect } from 'react'


const Register = () => {
  const [displayName, setdisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")

    const user = {
      displayName,
      email,
      password
    }
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.")
      return
    }

    const res = await createUser(user)
    //console.log(res)
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuario e compartilhe suas historias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input type="text"
            name='displayName'
            required placeholder='Nome do usuario'
            value={displayName}
            onChange={(e) => setdisplayName(e.target.value)}

          />
        </label>
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
        <label>
          <span>Confirmacao de senha: </span>
          <input type="password"
            name='ConfirmPassword'
            required placeholder='confirme a sua senha'
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
      </div>
  )
}

export default Register