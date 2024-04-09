import React from 'react'
import {ToastContainer,toast} from 'react-toastify'
import NewItem from './NewItem'


const handleClick = () => {
  toast.success("Hello frome react js")
}

const App = () => {
  return (
    <>
    <ToastContainer/>

    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 col-12 col-md-6 box1'><h1>BOX-2</h1></div> 
          <div className='col-lg-3 col-12 col-md-6 box2'> 
            <div className='crop'>
              <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1568929034.1712681222&semt=sph'></img> 
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App