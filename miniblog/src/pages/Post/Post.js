import styles from './Post.module.css';
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading, error } = useFetchDocument("posts", id);

  // Converta a string `tags` em um array
  const tagsArray = post?.tags
    ? post.tags.split(' ').map(tag => tag.replace('#', '').trim()).filter(tag => tag) // Remove '#' e espaços extras
    : [];

  return (
    <div className={styles.postContainer}>
      {loading && <p>Loading post...</p>}
      {error && <p>Error loading post: {error}</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} className={styles.postImage} />
          <p>{post.body}</p>
          <p>Created by: {post.createBy}</p>
          <div className={styles.tags}>
            {tagsArray.length > 0 ? (
              tagsArray.map((tag, index) => (
                <span key={index} className={styles.tag}>#{tag}</span>
              ))
            ) : (
              <p>No tags available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;


