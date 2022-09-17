import React from 'react'

 const ItemNote = (props) => {
  return (
    <div>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
    </div>
  )
}


export default ItemNote