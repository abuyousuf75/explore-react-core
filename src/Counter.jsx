import { useState } from "react"

export default function Counter(){

    const [counter, setCounter] = useState(0);

    const handelAdd = ()=>{
            const newCount = counter +1;
            setCounter(newCount)
    }

    const handelReduce = ()=>{
        const newCount = counter-1;
        setCounter(newCount)
    }
      
        return (
        <div>
                <h3>Counter : {counter}</h3>
                <button onClick={handelAdd} style={{border: '2px solid yellow'}}>+</button>
                    
                <button style={{marginLeft:'20px'}} onClick={handelReduce}>-</button>
        </div>
        )
}