import React, { useEffect, useState } from 'react'

const StateChild = ({cake, getDataFromChild}) => {
    const [city, setCity] = useState('noida'); // to make a state
    useEffect(() => {
        console.log('second')
    })
  return (
    <div>StateChild  - {getDataFromChild(city)}</div>
  )
}

export default StateChild