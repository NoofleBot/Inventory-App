import { Link } from 'react-router-dom';
import '../CSS/Home.css'

function Home({ loggedInUserId }) {
  return (
    <>
      <h1>Current Inventory:</h1>
      <p>Logged in as User ID: {loggedInUserId}</p>
    </>
  )
}

export default Home