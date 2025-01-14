import React, { useState } from 'react'

const CakeIceEx = () => {

    const [store, setStore] = useState({ cake: 0, ice: 0}); // can use any datatype as a state init value

    const incrementCake = (cakeNo) => {
        // setStore(cake + 1) // direct value insert same data type
        setStore((prev) => {
            return {cake: prev.cake + cakeNo, ice: prev.ice}
        })
    }
    const incrementIce = (iceNo) => {
        setStore((prev) => {
            return {cake: prev.cake, ice: prev.ice + iceNo}
        })
    }

  return (
    <div>
        <h1> State example component </h1>

            <h1> ice creams are {store.ice} </h1>
            <h1> cakes are {store.cake} </h1>
            <button type='button' onClick={() => incrementCake(2)}> Increment Cake </button>
            <button type='button' onClick={() => incrementIce(3)}> Increment Ice </button>
    </div>
  )
}

export default CakeIceEx