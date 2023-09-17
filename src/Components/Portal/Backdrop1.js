import React from 'react'

const Backdrop1 = (props) => {
  return (
    <>
    <div className="backdrop">
    <div>
      <div className="modal">
        <div className="item">
          <label>Sushi</label>
        </div>
        <div className="Amount">
          <label>Total Amount</label>
          <label>35.65</label>
        </div>
        <div className="buttons">
          <button onClick={()=>props.onClick1()} >close</button>
          <button >order</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Backdrop1;
