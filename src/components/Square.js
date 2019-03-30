import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

function Square(props){
    return (
      <div
      className={`box ${props.value}`}
       onClick={()=> {
        props.onClick();
       }}
       >
       </div>
    )
}

export default Square;