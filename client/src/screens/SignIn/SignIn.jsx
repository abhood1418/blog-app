// Darryl
import { useState, useEffect } from 'react'
import { getUser, getUsers } from '../../services/users'
import { Link } from 'react-router-dom'

const SignIn = ({user, setUser, loggedIn, setLoggedIn}) => {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const setLocalStorage = () => {
    localStorage.setItem("userID", `${user._id}`)
  }

  const checkForUser = async () => {
    const res = await getUsers()
    console.log(res)
    let account = res.find((account) => account.username === usernameInput)
    if (account === undefined) {
      alert('Sorry. Your username and/or password are incorrect')
    } else {
      if (account.password === passwordInput) {
        setUser(account)
        setLoggedIn(true)
        setLocalStorage()
      } else {
        alert('Sorry. Your username and/or password are incorrect')
      }
    }
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    checkForUser()
  }

  const checkLocalStorage = async () => {
    const id = localStorage.getItem("userID")
    console.log(id)
    if (id !== undefined) {
      let res = await getUser(id)
      setUser(res.data)
      setLoggedIn(true)
    }
  }

  // useEffect(() => {
  //   checkLocalStorage()
  // },[])

  return (
    <div>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label>Username: </label>
        <input placeholder='Username' value={usernameInput} onChange={(ev) => setUsernameInput(ev.target.value)} />
        <br />
        <label>Password: </label>
        <input type='password' placeholder='Password' value={passwordInput} onChange={(ev) => setPasswordInput(ev.target.value)} />
        <br />
        <input type='submit'/>
      </form>
      <br />
      <div>
        If you are new to this site, you can create a new account by clicking the link below.
      </div>
      <br />
      <Link to='/user-create'><div>Create New Account</div></Link>
    </div>
  )
}

export default SignIn