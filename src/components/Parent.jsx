import ChildCom from "./Child"

const ParentComponent = () => {
    var name ="divyansh"
    var age = 28;
    return (
        // <> </> => React fragments (when we do not need any extra html node)
        <>
            <h1> Parent component  </h1>
            <ChildCom name={name} age={age} />
        </>
        
    )
    
}

export {ParentComponent}

// export default ParentComponent