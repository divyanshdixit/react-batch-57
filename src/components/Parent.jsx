import react from "react";
import Child from './Child';

// react fragments (shorter version)
const Parent = () => {
     return <> 
        <h1> Welcome anurag </h1>
        <Child />
    </>
}

export default Parent;