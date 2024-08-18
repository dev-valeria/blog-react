import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setloading] = useState(null)

  //cleanup
  //deal with memory leak
  const [cancelled, setcancelled] = useState(false)
  const auth = getAuth()

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
}