import React from 'react'

const Child5 = ({getDataFromChild}) => {
    var name = "Divyansh";
  return (
    <div>
        Child5 compoent - {getDataFromChild(name)}

    </div>
  )
}

export default Child5