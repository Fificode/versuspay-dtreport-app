import React from 'react'

const DashboardHome = () => {
  return (
    <>
 <div className="mt-[90px] pl-[10px] py-[20px] ">
      <h1 className="text-[17px] md:text-[22px] lg:text-[28px] font-[500]">
        Welcome back,!
      </h1>
    </div>
    <div className="flex flex-col items-center">
    <div className="w-[300px] h-[200px]  my-[10px] bg-green rounded-[5px] xl:w-[700px] mx-[5px] py-[20px] shadow-md ">
      <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center items-center rounded-[50%] border-[2px] border-white w-[50px] h-[50px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
</div> 
 </div>
<h2 className="text-[35px] md:text-[30px] xl:text-[50px] font-[600] text-center py-[5px] text-white">Status</h2>
<p className="text-[22px] md:text-[30px] xl:text-[50px] font-[600] text-center py-[5px] text-white">All Systems Operational</p>

</div>
</div>
    </>
  )
}

export default DashboardHome