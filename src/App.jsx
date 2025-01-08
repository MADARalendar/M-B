import React from 'react'
import Swal from 'sweetalert2'

const App = () => {


  const handelClick = ()=>{
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true,
    });
  }
  return (
    <div>
        <button onClick={handelClick}>click me</button>
    </div>
  )
}

export default App
