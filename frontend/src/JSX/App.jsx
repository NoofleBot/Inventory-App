import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../CSS/App.css'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Header from './Header.jsx'
import Register from './Register.jsx'
import ItemDetails from './ItemDetails.jsx'
import CreateNewItem from './CreateNewItem.jsx'
import RegisterSuccess from './RegisterSuccess.jsx'

function App() {
  var [loggedInUser, setLoggedInUser] = useState(null)
  var [loggedInUserId, setLoggedInUserId] = useState(null)

  return (
    <>
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setLoggedInUserId={setLoggedInUserId} />
      <Routes>
        <Route path='/' element={<Home loggedInUserId={loggedInUserId} />} />
        <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} setLoggedInUserId={setLoggedInUserId} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/item/:id' element={<ItemDetails />} />
        <Route path='createNewItem' element={<CreateNewItem loggedInUserId={loggedInUserId} />} />
        <Route path='registerSuccess' element={<RegisterSuccess />} />
      </Routes>
    </>
  )
}

export default App
