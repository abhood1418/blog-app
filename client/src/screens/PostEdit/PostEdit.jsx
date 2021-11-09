import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Layout from "../../components/Layout/Layout"
import { getPost, updatePost } from '../../services/posts'

const PostEdit = (props) => {
    const [post, setPost] = useState({
        'username': `${props.user.username}`,
        'title': '',
        'imgURL': '',
        'content': [],
        'hashtags': [],
    })
  
    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()
  
    useEffect(() => {
      const fetchPost = async () => {
        const post = await getPost(id)
        setPost(post)
      }
      fetchPost()
    }, [id])
  
    const handleChange = (event) => {
      const { name, value } = event.target
      setPost({
        ...post,
        [name]: value,
      })
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault()
      const updated = await updatePost(id, post)
      setUpdated(updated)
    }
  
    if (isUpdated) {
      return <Navigate to={`/posts/${id}`} />
    }
  
    return (
      <Layout >
      <form className="create-form" onSubmit={handleSubmit}>
           <input
              className="input-title"
              placeholder='Title'
              value={post.title}
              name='title'
              required
              onChange={handleChange}
          />
          <textarea
              className="textarea-content"
              rows={10}
              placeholder='content'
              value={post.content}
              name='content'
              required
              onChange={handleChange}
          />
          <input
              className="input-image-link"
              placeholder='Image Link'
              value={post.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
          />
          <input
              className="input-hashtags"
              placeholder='hashtags'
              value={post.hashtags}
              name='hashtags'
              required
              onChange={handleChange}
          />
          <button type='submit' className="submit-button">Submit</button>
      </form>
  </Layout>
    )
  }
  
  export default PostEdit
  