import React from 'react'

const GifItem = ({title, url, id}) => {

    
  return (
    <div className='w-72 h-auto p-3'>
        <img src={url} alt={title} />
        <p>{title}</p>

    </div>
  )
}

export default GifItem