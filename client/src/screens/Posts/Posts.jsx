import { useState, useEffect } from 'react'
import './Posts.css'

import PostCard from '../../components/PostCard/PostCard'
import Layout from '../../components/Layout/Layout'
import { getPosts} from '../../services/posts'

const Posts = () => {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])


  return (
    <Layout>
      <div className='posts'>
        {posts.map((post, index) => {
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
        })}
      </div>
    </Layout>
  )
}

export default Posts
