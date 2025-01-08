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
     <div className='img rasm'>
      <img src="https://storage.kun.uz/source/3/Vl_i1uxggZlsLN-mhgv3xW480SDmDlCa.jpg" alt="" />
      <button onClick={click}>click to view the mountain</button>
     </div>
    </div>
  )
}

export default App;
