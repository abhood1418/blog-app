// Darryl
import { useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { createUser, getUsers } from '../../services/users'

const SignUp = ({setUser, setLoggedIn}) => {
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
      .then(
      setLocalStorage()
    )
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
    const nameCheck = res.data.find((user) => user.username === username)
      .then(check(nameCheck))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    checkUsername()
  }

  if (redirect === true) {
    return <Redirect to='/'/>
  }

  return (
    <div>
      <form onSubmit={handleSubmit(ev)}>
        <label>Username: </label>
        <input placeHolder='Username' value={username} onChange={(ev) => setUsername(ev.target.value)} />
        <br />
        <label>Password: </label>
        <input type='password' placeHolder='Password' value={password} onChange={(ev) => setPassword(ev.target.value)} />
        <br />
        <label>Name: </label>
        <input placeHolder='Name' value={name} onchange={(ev) => setName(ev.target.value)}/>
        <br/>
        <label>Profile Picture: </label>
        <input placeHolder='Image URL' value={imgURL} onChange={(ev) => setImgURL(ev.target.value)}/>
        <br/>
        <input type='submit'/>
      </form>
      <br />
      <Link to='/'><div>Back to Sign In</div></Link>
    </div>
  )
}

export default SignUp