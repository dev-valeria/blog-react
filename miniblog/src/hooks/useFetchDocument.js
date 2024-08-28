import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocument = async () => {
      setLoading(true);
      setError(null);

      try {
        const docRef = doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDocument(docSnap.data());
        } else {
          setError("Document not found");
        }
      } catch (error) {
        setError("Error fetching document: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadDocument();
    }

    return () => {
      // Cleanup function to avoid setting state on an unmounted component
    };
  }, [docCollection, id]);

  return { document, loading, error };
};


