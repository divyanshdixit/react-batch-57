import React, { useEffect, useState } from 'react'
import StateChild from './StateChild'

const StateComp = () => {
    var c = 'kanpur';
    
    // hooks => special type of function
    const [cake, setCake ] = useState(0) // return a array of two => state(value), setState(function to upodate the value)
    const [ice, setIce ] = useState(0) // return a array of two => state(value), setState(function to upodate the value)
    
    useEffect(() => {
        console.log('first')
    }, [cake])
    
    const getDataFromChild = (city) => {
        // console.log(city);
    }
    const incrementCake = () => {
        setCake(cake + 1)
    }
    const incrementIce = () => {
        setIce(ice + 1)
    }
    
    return (
        <>
            <h1> ice creams are {ice} </h1>
            <h1> cakes are {cake} </h1>
            <button type='button' onClick={incrementCake}> Increment Cake </button>
            <button type='button' onClick={incrementIce}> Increment Ice </button>
            <StateChild cake={cake} getDataFromChild={getDataFromChild} />
        </>
    )
}

export default StateComp