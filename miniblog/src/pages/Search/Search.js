import React from "react";
import styles from './Search.module.css';
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";
import { PostDetail } from "../../components/PostDetail";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts, loading, error } = useFetchDocuments("posts", search);

  console.log("posts", posts);
  console.log("search1:", search);

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.length === 0 && !loading && (
        <>
          <p>No posts found for your search...</p>
          <Link to="/" className="btn btn-dark">Back</Link>
        </>
      )}
      {posts && posts.map((post) => (
        <PostDetail key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Search;

