import React from 'react'
import ItemComponent from './Item.Component'

const ListComponent = (props) => {

    const{Items} = props
  return (
    <>
    <ul className='list-group'>
        {Items.map((item) => (
            <ItemComponent key={item.objectID} item={item} />
        ))}
    </ul>
    </>
  )
}

export default ListComponent