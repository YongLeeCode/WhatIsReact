import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import styles from './PostList.module.css';
import Modal from './Modal'

function PostList(props){
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData){
    console.log(postData);
    setPosts((existingPosts)=>[postData, ...existingPosts]);
  }
  return (
    <>
      {props.isPosting 
      ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
        ) 
      : null}
      {posts.length > 0 && (
        <ul className={styles.posts}>
        {/* key 고유키가 있어야함 */}
        {posts.map((post) => <Post key={post.author} author={post.author} text={post.body} />)}
      </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      
    </>
  )
}

export default PostList;