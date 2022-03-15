import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const [value, setValue] = useState('')
  // const [valur, setValur] = useState(second)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(value.trim().length > 2) {
      setCategories(cats => [value, ...cats])
      setValue('')
    }
  }
  return (
    <div>
        {/* setting */}
        {/* <input placeholder='Ingresar Nombre' type={'text'} value={addname['1']} onChange={(e) => {addname['0'](e.target.value)}} /> */}
        <form onSubmit={handleSubmit} >
          <input placeholder='Ingresar Nombre' type={'text'} value={value} onChange={(e) => {handleChange(e)}} />
          
        </form>
    </div>
  )
}

export default AddCategory

//prop types para cuidar de que el prop que llegue sea del tipo indicado y que este llegue de verdad
AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired
 }