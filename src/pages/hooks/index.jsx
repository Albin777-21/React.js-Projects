import React, { useEffect } from 'react'
import { useRef } from 'react'


const Hooks = () => {
    const countValue=useRef(0)
    const divElementRef=useRef(0)

    function handleClick(){
        countValue.current++
        console.log(countValue.current);
        
    }

    useEffect(()=>{

        const getDivRef=divElementRef.current
        console.log(getDivRef);
        getDivRef.style.color='red'
        setTimeout(()=>{
             getDivRef.style.color='blue'
        },2000)
        

    },[])
  return (
    <div>
        <h2> useRef , useCallback and useMemo hooks</h2>
        <button onClick={handleClick}>Click me</button>
        <div ref={divElementRef}>Some Random Texts</div>    
    </div>
  )
}

export default Hooks

