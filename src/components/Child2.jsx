import React from 'react'
import Child3 from './Child3'

const Child2 = ({age}) => {
  return (
    <div>
        Child2 component
        <Child3 age={age}/>
    </div>
  )
}

export default Child2