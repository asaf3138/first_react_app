import React from 'react'

const NewItem = (props) => {
  return (
    <div className='row rowItem'>
        <div className='col-lg6 '>
          <p className='title'>{props.item.title}</p>
        </div>

          <img className='img' src={props.item.image}/>


        <div className='col-lg6'></div>
    </div>
  )
}

export default NewItem;