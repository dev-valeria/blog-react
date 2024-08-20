import { db, auth } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Corrigido para false por padrão
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  // Register
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(user, { displayName: data.displayName });
      setLoading(false);
      return user;
    } catch (error) {
      let systemErrorMessage;

      if (error.code === "auth/weak-password") {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.code === "auth/email-already-in-use") {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // Logout - sign out
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  // Login - sign in
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
    console.log("Error code:", error.code); 
    console.log("Error message:", error.message);
      let systemErrorMessage;

      if (error.code === "auth/user-not-found" || "auth/invalid-credential") {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.code === "auth/too-many-requests") {
        systemErrorMessage = "Senha incorreta.";
      } else if (error.code === "auth/invalid-email") {
        systemErrorMessage = "E-mail inválido.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};


