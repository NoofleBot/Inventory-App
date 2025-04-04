import { Link, useNavigate } from 'react-router-dom'
import '../CSS/Header.css'

function Header({ loggedInUser, setLoggedInUser, setLoggedInUserId }) {
  const navigate = useNavigate()

  function handleLogout() {
    setLoggedInUser(null)
    setLoggedInUserId(null)
    navigate('/')
  }

  return (
    <>
      <nav>
        <div className='returnhome'>
          <Link to='/'>Inventory Management</Link>
        </div>
        <div className='loginorregister'>
        {loggedInUser ? (
            <>
              <div>Welcome, <b>{loggedInUser}!</b></div>
              <button onClick={handleLogout}>Log Out</button>
            </>
          ) : (
            <>
              <Link to='/login' >Login</Link>
              <Link to='/register'>Register</Link>
            </>
          )}
        </div>
      </nav>
    </>
  )
}

export default Header