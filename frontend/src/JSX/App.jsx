import { Routes, Route } from 'react-router-dom';
import '../CSS/App.css'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Header from './Header.jsx'
import Register from './Register.jsx'
import ItemDetails from './ItemDetails.jsx'
import CreateNewItem from './CreateNewItem.jsx'
import RegisterSuccess from './RegisterSuccess.jsx'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/item/:id' element={<ItemDetails />} />
        <Route path='createNewItem' element={<CreateNewItem />} />
        <Route path='registerSuccess' element={<RegisterSuccess />} />
      </Routes>
    </>
  )
}

export default App
