import ChildCom from "./Child"

const ParentComponent = () => {
    var name ="divyansh"
    return (
        // <> </> => React fragments (when we do not need any extra html node)
        <>
            <h1> Parent component  </h1>
            <ChildCom name={name} age="28"/>
            <ChildCom name="anurag" age="22"/>
        </>
        
    )
    
}

export {ParentComponent}

// export default ParentComponent