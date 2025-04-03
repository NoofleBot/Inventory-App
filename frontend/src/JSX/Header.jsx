import { Link } from 'react-router-dom';
import '../CSS/Header.css'

function Header() {
  return (
    <>
      <nav>
        <div className='returnhome'>
          <Link to='/'>Inventory Management</Link>
        </div>
        <div className='loginorregister'>
          <Link to='/login' >Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      </nav>
    </>
  )
}

export default Header