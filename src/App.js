import React from 'react'
import {ToastContainer,toast} from 'react-toastify'


const handleClick = () => {
  toast.success("Hello frome react js")
}

const App = () => {
  return (
    <>
    <ToastContainer/>
    <div>Asaf Aviv</div>
    <button onClick={handleClick} className='btn btn-warning'>CLICK ME</button>
    </>
  )
}

export default App