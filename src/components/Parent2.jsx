import React from 'react'
import Child4 from './Child4'

const Parent2 = () => {
    var age = 30;

    const getDataFromChild = (name) => {
        console.log('parent 2', name)
    }
  return (
    <div>
        Parent2 component
        <Child4 age={30} getDataFromChild={getDataFromChild}/>
    </div>
  )
}

export default Parent2