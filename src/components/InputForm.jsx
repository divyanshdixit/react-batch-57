import React, { useState } from 'react'

const InputForm = () => {
    const [fullName, setName] = useState(0);
    const [data, setData] = useState('');

    const handleName = (e) => {
        // console.log(e);
        // const {name, value} = e.target;
        // setName((prev) => {
        //     return {[name]: value}
        // })
        setName(e.target.value)
    }

    const getName = () => {
        setData(fullName)
        console.log(fullName, typeof fullName)
    }
  return (
    <div>
        <h1> form fields - input  </h1>
        <p> Entered name is - {data}</p>
        <input type='text' placeholder='enter name' name='fullName' value={fullName} onChange={(e) => handleName(e)} />
        <button type='button' onClick={getName}> Get Data </button>
    </div>
  )
}

export default InputForm