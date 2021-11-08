import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate'
import PostDetail from './screens/PostDetail/PostDetail'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={loggedIn ? <Home /> : <SignIn user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/posts" element={<Posts user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={ setLoggedIn}/>} />
        <Route path="/post-create" element={<PostCreate user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/posts/:id" element={<PostDetail user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/post-edit/:id" element={<PostEdit user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        
      </Routes>
    </div>
  )
}

export default App