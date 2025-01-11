import React from 'react'
import Child5 from './Child5';

const Child4 = ({age, getDataFromChild}) => {
    
  return (
    <div>
        Child4 component - {age}
        <Child5 getDataFromChild={getDataFromChild}/>
    </div>
  )
}

export default Child4