// Darryl
import { useState } from 'react'
import {Link, Navigate} from 'react-router-dom'
import { createUser, getUsers } from '../../services/users'
import './SignUp.css'

const SignUp = ({setUser, setLoggedIn, user}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [redirect, setRedirect] = useState(false)

  const setLocalStorage = () => {
    localStorage.setItem("userID", `${user._id}`)
  }

  const newUser = async () => {
    let user = {
      username,
      name,
      imgURL,
      password
    }
    const newUserAccount = await createUser(user)
    setUser(newUserAccount)
    setLocalStorage()
  }

  const check = (nameCheck) => {
    if (nameCheck === undefined) {
      newUser()
      alert('Congratulations! You now have an account')
      setLoggedIn(true)
      setRedirect(true)
    } else {
      alert('Username is already taken. Please choose a new username.')
    }
  }

  const checkUsername = async () => {
    const res = await getUsers()
    const nameCheck = res.find((user) => user.username === username)
    check(nameCheck)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    checkUsername()
  }

  if (redirect === true) {
    return <Navigate to='/'/>
  }

  return (
    <div className='signUp-display-div'>
      <form onSubmit={(ev) => handleSubmit(ev)} className='signUp-form'>
        <label>Username: </label>
        <input placeholder='Username' value={username} onChange={(ev) => setUsername(ev.target.value)} />
        <br />
        <label>Password: </label>
        <input type='password' placeholder='Password' value={password} onChange={(ev) => setPassword(ev.target.value)} />
        <br />
        <label>Name: </label>
        <input placeholder='Name' value={name} onChange={(ev) => setName(ev.target.value)}/>
        <br/>
        <label>Profile Picture: </label>
        <input placeholder='Image URL' value={imgURL} onChange={(ev) => setImgURL(ev.target.value)}/>
        <br/>
        <input type='submit' value='Create Account'/>
      </form>
      <br />
      <Link to='/'><div>Back to Sign In</div></Link>
    </div>
  )
}

export default SignUp