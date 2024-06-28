import React from 'react'

const ItemComponent = ({item}) => {
  return (
    <>
    <li className='list-group-item d-sm-flexz'>
        <p>Title: {item.title}</p>
        <a>{item.url}</a>
        <p>Author: {item.author} </p>
        <p>num_comments: {item.num_comments}</p> 
        <p>points: {item.points}</p>
        <p>objectID: {item.objectID}</p> </li>
    </>
  )
}

export default ItemComponent
