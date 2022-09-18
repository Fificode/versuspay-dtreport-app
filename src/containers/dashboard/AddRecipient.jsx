import React from 'react'

const AddRecipient = () => {
  return (
    <>
      <div>
       <div className='md:absolute md:left-[280px] md:mt-[30px] mt-[80px] my-[30px]'>
      <h1 className='text-[28px] md:text-[40px] font-[600] text-center'>Add Recipient</h1>
      <form >
      <div className="flex flex-col items-center">
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Name'>Name</label>
  <input type="name" name='Name' placeholder='Input recipient name' className='w-[300px]  md:w-[450px] outline-blue text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
  </div>
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Email'>Email address</label>
  <input type="email" name='Email' placeholder='Input email address' className='w-[300px] md:w-[450px] outline-blue text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
 
</div>

<div className="flex justify-center my-[15px]">
  <button  className='text-[14px] md:text-[16px] px-[10px] md:px-[8px] py-[10px] text-center bg-black text-white rounded-[5px]'>Add Recipient</button>
</div>
      </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default AddRecipient