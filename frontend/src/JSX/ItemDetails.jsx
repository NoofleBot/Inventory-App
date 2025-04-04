import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../CSS/ItemDetails.css'

function ItemDetails() {
  const {id} = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    const fetchItem = async () => {
        const response = await fetch(`http://localhost:5172/items/${id}`)
        const data = await response.json()
        setItem(data[0])
    }
    fetchItem()
  }, [id])

  return (
    <>
      <h1><u>Item details:</u></h1>
      {item && (
        <div>
          <h3><i>Item Name:</i> {item.item_name}</h3>
          <p><i>Description:</i> {item.description}</p>
          <p><i>Quantity:</i> {item.quantity}</p>
          <br></br>
          <p><i>Item ID:</i> {item.id}</p>
          <p><i>Created by (User ID):</i> {item.user_id}</p>
        </div>
      )}
    </>
  )
}

export default ItemDetails