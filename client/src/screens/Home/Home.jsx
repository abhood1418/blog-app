// Andrew H.
import Layout from '../../components/Layout/Layout.jsx'
import PostCards from '../../components/PostCards/PostCards.jsx'

const Home = () => {
  return (
    <Layout >
      <div className="home-div">
        <h1>Welcome to Team Sweet Blogger</h1>
        <PostCards />
      </div>
    </Layout>
  )
}

export default Home;