import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

// const categories = ['OnePunch', 'SamuraiX', 'DragonBall']
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

  return (
    <div >
        <h2>Anime Bucket List</h2>
        {/* sending array with props */}
        {/* <AddCategory addname={[setName, name]} /> */}
        {/* <div className='inputSearch'>
          <AddCategory setCategories={setCategories}/>
        </div>  */}
        {/* <hr /> */}
        {/* <button onClick={(e) => {handleAdd()}}>Agregar</button> */}
        <ol>
              {categories.map(category => {
                  return(
                      <GifGrid 
                      key={ category }
                      category={ category } />
                  )
              })}
        </ol>
       
    </div>
  )
}

export default GifExpertApp
