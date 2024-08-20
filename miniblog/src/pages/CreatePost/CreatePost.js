import React, { useState } from 'react';
import style from './CreatePost.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário aqui
  }

  return (
    <div className={style.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que você quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          <span>Título:</span>
          <input 
            type='text'
            name='title'
            required 
            placeholder='Pense em um bom título...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={style.input}
          />
        </label>

        <label className={style.label}>
          <span>URL da imagem:</span>
          <input 
            type='text'
            name='image'
            required 
            placeholder='Insira uma imagem que representa o seu post'
            onChange={(e) => setImage(e.target.value)}
            value={image}
            className={style.input}
          />
        </label>

        <label className={style.label}>
          <span>Conteúdo:</span>
          <textarea 
            name='body' 
            required 
            placeholder='Insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className={style.textarea}
          />
        </label>

        <label className={style.label}>
          <span>Tags:</span>
          <input 
            type='text'
            name='tags'
            required 
            placeholder='Insira as tags separadas por vírgula'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            className={style.input}
          />
        </label>

        <button type='submit' className='btn'>Cadastrar</button>

        {/* Exemplo de como lidar com loading e erro */}
        {/* 
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {formError && <p className='error'>{formError}</p>}
        */}
      </form>
    </div>
  )
}

export default CreatePost;
