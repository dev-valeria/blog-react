// Navbar.js
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini<span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
             <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Login
          </NavLink>
        </li>
         <li>
          <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Sign Up
          </NavLink>
        </li>
          </>
        )}
        {user && (
          <>
           <li>
          <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Novo Post
          </NavLink>
        </li>
         <li>
          <NavLink to="/dasboard" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Dasboard
          </NavLink>
            </li>
            </>
        )}
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            About
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
