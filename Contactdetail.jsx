import React from 'react'

// JSON.parse(localStorage.getItem("contact"))
 export default function Contactdetail({fullname,email,number,deleteentry,index}) {
  return (<>
      <div className=''>
<h1 className='text-2xl font-bold'>name:{fullname}   Email:{email}   No:{number} </h1>
 <button onClick={()=>deleteentry(index)}>delete</button>



      </div>
  
  </>
    
  )
}
