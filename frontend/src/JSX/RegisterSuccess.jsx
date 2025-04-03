import { Link } from 'react-router-dom';
import '../CSS/RegisterSuccess.css'

function RegisterSuccess() {
  return (
    <>
      <h1>User Successfully Registered</h1>
      <Link to='/login'>Click here to go to login</Link>
    </>
  )
}

export default RegisterSuccess