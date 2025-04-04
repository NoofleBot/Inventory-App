import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../CSS/Login.css'

function Login({ setLoggedInUser, setLoggedInUserId }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:5172/users')
      const users = await response.json()
      const user = users.find(
        (user) => user.username === username && user.password === password
      )
      if (user) {
        setLoggedInUser(user.username)
        setLoggedInUserId(user.id)
        navigate('/')
      } else {
        setMessage('Invalid username or password.')
      }
    } catch (error) {
      setMessage('Error connecting to the server')
    }
  }

  return (
    <>
      <h1>User Login Portal:</h1>
      <form onSubmit={handleLogin}>
        <div>
          <h2>Username:</h2>
          <input type='text' id='username' value={username} onChange={(event) => setUsername(event.target.value)} required/>
          <h2>Password:</h2>
          <input type='password' id='password' value={password} onChange={(event) => setPassword(event.target.value)} required/>
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>{message}</p>
    </>
  )
}

export default Login