import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';


export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ ]);
    
    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory)){
             return window.alert(`existe: ${newCategory}`)
        }
        
         setCategories([newCategory, ...categories]);
    }
    
    

    return (
        <>
            <h1 className='w-36  text-4xl bg-red-500'>Search</h1>    
            <AddCategory 
                onNewCategory={onAddCategory}
            />
            {
                categories.map( (category) => (
                <GiftGrid key={category} 
                categorias={category}/>
            ))
            }
        </>
    )
}