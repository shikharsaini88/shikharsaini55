 import React, { useState } from 'react'
import Contactdetail from './Contactdetail'
var Student1=JSON.parse(localStorage.getItem("contact"))??[]
export default function Contactsearch() {
    const [deletebutton,setdelete]=useState(Student1)
     const [name,setFullname]=useState("")
        const [email,setEmail]=useState("")
        const [number,setNumber]=useState("")
         const [chooseinput,setinput]=useState("")
            const [showdata,setdisplaydata]=useState(deletebutton)
            const deletefunction=(index)=>{
                deletebutton.splice(index,1)
                setdelete([...deletebutton])

                localStorage.setItem("contact",JSON.stringify(deletebutton))
            }
           const savedata=()=>{
            var studentobject={
                name:name,
                email:email,
                number:number
            }
            setFullname("")
            setEmail("")
            setNumber("")

            deletebutton.push(studentobject)
            const updatelist=([...deletebutton,studentobject])
            localStorage.setItem("contact",JSON.stringify(deletebutton))

           }
           function show(){
            const inputchoose=deletebutton.filter((v)=>v.name.toLowerCase().startsWith(chooseinput))
            setdelete(inputchoose)
           }
  return (
   <>
   <input onKeyUp={()=> show()} onChange={(e)=>setinput(e.target.value)} value={chooseinput} className=' ml-15 mt-3 mb-3 w-150 rounded-2xl italic 'placeholder='name or number'/>
   <button className='w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600'>Contacts</button>
   <div className='flex'>
   <div className='w-1/3 bg-white p-5 shadow-lg rounded-lg'>
   <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Add Contact</h2>
   <input onChange={(e)=> setFullname(e.target.value)} type='text' value={name} placeholder='name' className='w-full p-2 border border-gray-300 rounded-lg mb-2' id='nameid'/>
   <input onChange={(e)=> setEmail(e.target.value)} type='email' value={email} placeholder='email' className='w-full p-2 border border-gray-300 rounded-lg mb-2' id='emailid'/>
   <input onChange={(e)=> setNumber(e.target.value)} type='number' value={number} placeholder='number' className='w-full p-2 border border-gray-300 rounded-lg mb-2' id='numberid'/>
   <button onClick={()=>savedata()} className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 '>Submit</button>
   </div>
   <div className='w-2/3 bg-white p-6 ml-10 shadow-lg rounded-lg'>
   <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Contacts</h2>
   <ul className='space-y-4' id='itemslist'>{deletebutton.map((data,index)=>(<Contactdetail fullname={data.name}
   email={data.email}
number={data.number}
index={index}
deleteentry={deletefunction}/>))}</ul></div>
</div>
   </>
  )
}
