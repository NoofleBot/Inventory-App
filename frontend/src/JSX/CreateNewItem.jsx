import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../CSS/CreateNewItem.css'

function CreateNewItem({ loggedInUserId }) {
  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemQuantity, setItemQuantity] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleNewItem = async (event) => {
    event.preventDefault()

    const newItem = {
      userId: loggedInUserId,
      itemName,
      itemDescription,
      itemQuantity,
    }

    try {
      const response = await fetch('http://localhost:5172/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })

      if (response.ok) {
        navigate('/')
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
      <h1>Create New Item:</h1>
      <form onSubmit={handleNewItem}>
        <div>
          {}
          <h2>Item Name:</h2>
          <input type="text" id="itemName" value={itemName} onChange={(event) => setItemName(event.target.value)} required/>
          <h2>Description:</h2>
          <input type="text" id="itemDescription" value={itemDescription} onChange={(event) => setItemDescription(event.target.value)} required/>
          <h2>Quantity:</h2>
          <input type="number" id="itemQuantity" value={itemQuantity} onChange={(event) => setItemQuantity(event.target.value)} required/>
        </div>
        <button type="submit">Add Item</button>
      </form>
      <p>{message}</p>
    </>
  )
}

export default CreateNewItem