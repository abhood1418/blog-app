// Andrew H
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { getPost, deletePost } from '../../services/posts';
import Comments from '../../components/Comments/Comments.jsx'
import PostEdit from '../PostEdit/PostEdit';


const PostDetail = (props) => {

  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Fetching Post...</h1>
  }
  
  return (
    <Layout>
      <div className="post-detail-div">
        <h1>{post.title}</h1>
        <img className="post-detail-image" src={post.imgURL} alt={post.title} />
        <p>{post.content}</p>
        <em>{post.username}</em>
        <p>{post.hashtags}</p>
        <section className="conditional-edit-delete-btn">
        {props.user.username === post.username ? <PostEdit /> && <button onClick={() => deletePost(post.id)}>Delete</button> : null}
        </section>
        <Comments post={post}/>
      </div>
    </Layout>
  )
}

export default PostDetail;