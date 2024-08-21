import styles from './PostDetail.module.css'

import { Link } from 'react-router-dom'

export const PostDetail = ({ post }) => {
  const tagsArray = post.tags ? post.tags.split(',').map(tag => tag.trim()) : [];

  
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} className={styles.postImage} />
      <h2>{post.title}</h2>
      <p className={styles.createby}>{post.createBy}</p>
       <div className={styles.tags}>
        {tagsArray.length > 0 ? (
          tagsArray.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))
        ) : (
          <p>No tags available</p>
        )}
      </div>
      <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver Post</Link>
    </div>
  )

}