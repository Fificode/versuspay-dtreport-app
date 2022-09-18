import React from 'react'

const AddIncident = () => {
  return (
    <>
       <div className='md:absolute md:left-[280px] md:mt-[30px] mt-[80px] my-[30px]'>
      <h1 className='text-[28px] md:text-[40px] font-[600] text-center'>Add Incident</h1>
      <form >
      <div className="flex flex-col items-center">
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Date'>Date</label>
  <input type="date" name='Incident date' placeholder='Incident date' className='w-[300px]  md:w-[450px] outline-blue text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
  </div>
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Description'>Description</label>
  <input type="text" name='Description' placeholder='Incident description' className='w-[300px] md:w-[450px] outline-blue text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
 
</div>

<div className="flex justify-center my-[15px]">
  <button  className='text-[14px] md:text-[16px] px-[10px] md:px-[8px] py-[10px] text-center bg-black text-white rounded-[5px]'>Add Incident</button>
</div>
      </div>
      </form>
    </div>
    </>
  )
}

export default AddIncident