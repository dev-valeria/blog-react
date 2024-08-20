//CSS
import styles from "./About.module.css"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini<span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no Front-End e Firebase no Back-End.</p>
      <p>
        <Link to="/posts/create" className="btn">Criar Post</Link> 
      </p>
    </div>
  )
}

export default About