import React ,{useRef} from 'react'
import ReactDOM from "react-dom";

//Accessing DOM elements directly
const Home = () => {
    const inputElement = useRef();
    const handleInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "1000"
        inputElement.current.style.color = 'blue'
       // inputElement.current.style.display = 'none'
    }
  return (
      <>
    <input type="text" ref={inputElement}/>
    <button onClick={handleInput}>Click</button>
    </>
  )
}

export default Home; 