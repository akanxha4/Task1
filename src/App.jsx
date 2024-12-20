import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const newArr = [...allUsers, {name,company,phone}]


  const submitHandler = (e)=>{
    e.preventDefault()
    setName('')
    setPhone('')
    setCompany('')
    console.log('submitted');
    setAllUsers(newArr);
    console.log(newArr);
  }

  const copyUsers = [...allUsers]

  const deleteHandler = (i)=>{
    copyUsers.splice(i,1)
    setAllUsers(copyUsers)
  }

  return (
    <div className='bg-neutral-200  h-[100vh] w-full flex'>
      <div>
       <form onSubmit={(e)=>{
        submitHandler(e)
       }} className='h-[95vh] w-[450px] bg-white p-10 m-4 rounded'>

        <h1 className='text-2xl text-gray-700 font-bold'>Add Contact</h1>
        <h1 className='mt-4 text-black font-medium'>Name<span className='text-red-600'>*</span></h1>
        <input 
        value={name}
        onChange={(elem)=>{
          setName(elem.target.value)
        }}
         className='w-full mt-2 border-2 border-gray-200 rounded py-1 px-2' 
         type="text" 
         placeholder='Enter name' />

        <h1 className='mt-3 text-black font-medium'>Company</h1>
        <input
        value={company}
        onChange={(elem)=>{
          setCompany(elem.target.value)
        }} 
        className='w-full mt-2 border-2 border-gray-200 rounded py-1 px-2' 
        type="text" 
        placeholder='Enter company' />

        <h1 className='mt-3 text-black font-medium'>Phone<span className='text-red-600'>*</span></h1>
        <input
        value={phone}
        onChange={(elem)=>{
          setPhone(elem.target.value)
        }}
         className='w-full mt-2 border-2 border-gray-200 rounded py-1 px-2' 
         type="text" 
         placeholder='Enter phone number' />

         {/* <h1 className='mt-4 font-medium text-blue-300'>
         <input
         className='mt-3' 
         type="checkbox" 
         />
          <span className='text-xl'>Favorite</span>
         </h1> */}

        <button className='border w-full py-2 bg-blue-700 mt-6 border-blue-700 text-white rounded'>Add Contact</button>
       </form>
      </div>

      <div className='h-[100vh] w-[670px] ml-4 rounde bg-trasparent p-8 overflow-y-scroll'>
        <h1 className='text-2xl text-gray-700 font-bold m-4'>Contact List</h1>
        {allUsers.map(function(elem,i){
              return <div key={i} className='ml-4 p-6 bg-white mt-4 rounded-lg flex justify-between items-center'>
                <div className='ml-2'>
                <h1 className='text-xl font-semibold text-gray-800'>{elem.name}</h1>
                <h1 className='text-xs font-semibold text-gray-600'>Company: {elem.company}</h1>
                <h1 className='text-xs font-semibold text-gray-600'>Phone: {elem.phone}</h1>
                 {/* <h2 className='text-xs font-mono bg-orange-400 w-fit px-2 py-1 rounded-full mt-2 text-white'>Favorite ★</h2> */}
                </div>
                <button onClick={()=>{
                  deleteHandler(i)
                }} className='py-2 mr-4 bg-red-600 px-5 text-white rounded text-xs font-medium'>Delete</button>
              </div>
            })}
      </div>
    </div>
  )
}

export default App
