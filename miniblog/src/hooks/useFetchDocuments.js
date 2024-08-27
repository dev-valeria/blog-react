import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const collectionRef = collection(db, docCollection);

      try {
        let q;

        if (search) {
          if (search.trim() === "") {
            setDocuments([]);
            setLoading(false);
            return;
          }

          q = query(
            collectionRef,
            where("tagsArray", "array-contains", search.trim()), 
            orderBy("createdAt", "desc")
           );
        } else {
          q = query(collectionRef, orderBy("createdAt", "desc"));
        }

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          if (!querySnapshot.empty) {
            setDocuments(
              querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            );
          } else {
            setDocuments([]);
          }
          setLoading(false);
        });

        return () => unsubscribe(); // Limpeza do listener

      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();
  }, [docCollection, search]);

  return { documents, loading, error };
};







