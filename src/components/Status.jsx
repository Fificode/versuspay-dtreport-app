import React from 'react'

const Status = ({title, status}) => {
  return (
    <>
    <div className='border-[1px] border-solid border-gray smaller:h-[90px] h-[100px] md:h-[80px] w-[100%] lg:w-[40%] rounded-[3px] my-[5px] lg:mx-[5px]'>
       <div className="flex justify-between px-[10px] py-[10px]">
        <div className="flex flex-col mx-[5px]">
        <div className="flex flex-row ">
         <h1 className='pl-[5px] text-[16px] font-[500]'>{title}</h1>
         <div className="md:pl-[10px] pr-[25px] md:pr-[0px]">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className=" w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>
</div>
</div>
 <p className='px-[5px] pt-[5px] text-[15px] font-[400]'>{status}</p>
</div>
 <div className="flex flex-col items-center pt-[10px]">
      <div className="flex flex-row justify-center items-center bg-green rounded-[50%] border-[2px] border-white w-[30px] h-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
</div> 
 </div>

</div>
       
         </div>
    </>
  )
}

export default Status