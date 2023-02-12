import React from 'react'
import "./TitleText.css"

function Title(props) {
  return (
        <div className='TitleText'>
            <h2>{props.text}</h2>
        </div>
  )
}

export default Title