import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../CSS/Register.css'

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault()

    const newUser = {
      firstName,
      lastName,
      username,
      password,
    }

    try {
      const response = await fetch('http://localhost:5172/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })

      if (response.ok) {
        navigate('/registerSuccess')
      } else {
        const errorData = await response.json()
        setMessage(`Error: ${errorData.message}`)
      }
    } catch (error) {
      setMessage('Error connecting to the server.')
    }
  }

  return (
    <>
      <h1>Register New User:</h1>
      <form onSubmit={handleRegister}>
        <div>
          <h2>First Name:</h2>
          <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} required/>
          <h2>Last Name:</h2>
          <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} required/>
          <h2>Username:</h2>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required/>
          <h2>Password:</h2>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </>
  )
}

export default Register