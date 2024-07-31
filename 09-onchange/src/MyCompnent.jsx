import React, {useState} from "react"


function MyComponent(){
  const [name, setName] = useState("BOB")
  const [quantity, setQuantity] = useState(1)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")
  const [shipping, setShipping] = useState("delivery")

  function handleNameChange(event){
    setName(event.target.value)
  }
  function handleQuantity(event){
    setQuantity(event.target.value)
  }
  function handleCommentChange(event){
  setComment(event.target.value)
  }
  function handlePaymentChange(event){
    setPayment(event.target.value)
  }
  function handleShippingChange(event){
    setShipping(event.target.value)
  }

  return(
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name : {name}</p>


      <input type="number" value={quantity} onChange={handleQuantity}  />
      <p>Quantity : {quantity}</p>

      <textarea value={comment} placeholder="Enter Delivery instructions" onChange={handleCommentChange}></textarea>
      <p>Comment : {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>payment : {payment}</p>
      <label htmlFor="">
        <input type="radio" value="pickup"
         checked={shipping === "pickup"}
         onChange={handleShippingChange}
         />
        Pick up</label>
      <label htmlFor="">
      <input type="radio" value="delivery"
         checked={shipping === "delivery"}
         onChange={handleShippingChange}
         />
         Delivery</label>
         <p>shipping : {shipping}</p>
        


    </div>
  )
}
export default MyComponent