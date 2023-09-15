
import React from 'react'
import './AddButton.css'
const AddButton = () => {
  return (
    <>
    <form >
        <div className='first-row'>
        <label htmlfor='add'>Amount</label>&nbsp;&nbsp;&nbsp;
        <input type="number" min={0}   id='add'></input><br></br>
        <button >+ Add</button>
        </div>
       
    </form>
    </>
  )
}

export default AddButton
