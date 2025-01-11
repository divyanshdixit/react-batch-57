
// props => object
// object destructuring 

import Child2 from "./Child2"

const ChildCom = ({name, age}) => {
    return (
    <>
        <h1> Child 1 component - {name} {age} </h1>
        <Child2 age={age}/>
    </>
    )

}

export default ChildCom