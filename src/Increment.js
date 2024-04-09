import React,{ useState } from "react";

function Increment(props) {

    const [count , setCount] = useState(0);

    return (
        <>
                <div style={{ height: '30px', width: '400px',padding: '20px',marginTop:'20px'}} >

                    <h1>{count}</h1>
                    
                    <button onClick={()=>{
                        setCount(count + 1)
                    }}>Increment</button>

                    <button onClick={()=>{
                        setCount(count - 1)}}>
                        Decrement</button>
                    </div>
                    
        </>
    )
}

export default Increment;