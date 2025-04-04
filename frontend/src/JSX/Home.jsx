import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Home.css'

function Home({ loggedInUserId }) {
  const [items, setItems] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5172/items')
        const data = await response.json()
        if (loggedInUserId) {
          const userItems = data.filter((item) => item.user_id === loggedInUserId)
          setItems(userItems)
          if (userItems.length === 0) {
            setMessage('No items found for your account, get started by adding a new item or log out to see all items.')
          }
        } else {
          setItems(data)
          setMessage('')
        }
      } catch (error) {
        setMessage('Error fetching items from the server.')
      }
    }
    fetchItems()
  }, [loggedInUserId])

  return (
    <>
      <h1>Current Inventory:</h1>
      {loggedInUserId && (
        <div className="createitembutton">
          <Link to="/createNewItem">Create New Item</Link>
        </div>
      )}
      <p><b>{message}</b></p>
      {items.map((item) => (
        <div>
        <div className="itemcard">
          <h3><b>{item.item_name}</b></h3>
          <p>
          {item.description.length > 100
             ? `${item.description.slice(0, 100)}...`
             : item.description}
          </p>
          <p><i>Quantity:</i> {item.quantity}</p>
          <div className="viewitembutton">
            <Link to={`/item/${item.id}`}>View {item.item_name}</Link>
          </div>
        </div>
        <br></br> {/* Lazy non-CSS way of seperating item cards */ }
      </div>
      ))}
    </>
  )
}

export default Home