import { useState, useEffect } from 'react'
import './PostCards.css'
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

const PostCards = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <PostCard
          _id={post._id}
          username={post.username}
          title={post.title}
          imgURL={post.imgURL}
          content={post.content}
          hashtags={post.hashtags}
          comments={post.comments}
          key={index}
        />
      ) : null
    )

       
    // <div>{props.username}</div> 
    // <div>{props.title}</div> 
    // <img  src={props.imgURL} alt={props.title} /> 
    // <div>{props.content}</div> 
    // <div>{props.hashtags}</div> 
    // <div>{props.comments}</div> 



  return (
    <div className='post-cards'>
      <div className='latest'>LATEST</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default PostCards
