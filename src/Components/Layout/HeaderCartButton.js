import React from 'react'
import './HeaderCartButton.css'
import CartIcon from '../Cart/CartIcon'
import { useState } from 'react'



export default function HeaderCartButton(props) {

  return (
    <div>
        <button className='button' onClick={()=>props.onClick()}>
            <span className='icon'>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className='badge'>
                3
            </span>
        </button>
        
      
    </div>
  )
}
