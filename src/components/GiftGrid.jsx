import { useEffect, useState } from 'react'

import GifItem from './GifItem'
import {useFetchGifs} from '../hooks/useFetchGifs'


export const GiftGrid = ({categorias}) => {

  const { images, isLoading } = useFetchGifs(categorias)
  



  return (
    <div>
        <h2>
            {categorias}
        </h2>

        {isLoading && ( <h2 className='text-9xl'> Cargandoo</h2>)}

        <div className='flex flex-row flex-wrap justify-center'>
          {images.map( (image )=>(
            <GifItem key={image.id}
                      {...image}/>
          ))}
        </div>
    </div>
  )
}
