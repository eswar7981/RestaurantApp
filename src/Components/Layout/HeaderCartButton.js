import React from 'react'
import './HeaderCartButton.css'
import CartIcon from '../Cart/CartIcon'


export default function HeaderCartButton(props) {
  return (
    <div>
        <button className='button'>
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
