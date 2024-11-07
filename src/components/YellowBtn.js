import React from 'react'
import "../styles/button.css"

function YellowBtn({text,onClickFunction}) {
  return (
    <button className='yellow-btn' onClick={onClickFunction}>
      {text}
    </button>
  )
}

export default YellowBtn
 