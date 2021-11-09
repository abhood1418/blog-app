// Andrew H
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { getPost, deletePost } from '../../services/posts';
import Comments from '../../components/Comments/Comments.jsx'
import PostEdit from '../PostEdit/PostEdit';
import './PostDetail.css'


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
    return <h1 className="fetching">Fetching Post...</h1>
  }
  
  return (
    <Layout>
      <div className="full-page">
        <section className="post-detail-div">
          <h5 className="user-header">{post.username}</h5>
          <hr />
        <img className="post-detail-image" src={post.imgURL} alt={post.title} />
        <section className="text-sect">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p className="hashtags">{post.hashtags}</p>
        </section>
        </section>
        <section className="conditional-edit-delete-btn">
        {props.user.username === post.username ? <PostEdit /> && <button onClick={() => deletePost(post.id)}>Delete</button> : null}
        </section>
        <section>
        <Comments post={post}/>
        </section>
      </div>
    </Layout>
  )
}

export default PostDetail;