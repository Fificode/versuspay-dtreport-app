import React from 'react'

const FalseIncident = ({date, title}) => {
  return (
    <>
<div className="my-[20px]">
    <h1 className="text-[18px] font-[500] px-[30px] py-[10px]">{date}</h1>
    <div className="flex justify-center"><div className='border-b-[1px] border-solid border-b-gray w-[85%] md:w-[93%] lg:w-[95%] xl:w-[96%] 2xl:w-[98%] px-[20px]'></div></div>
    <p className='text-[16px] font-[400] px-[30px] py-[10px]'>{title}</p>
    
</div>
    </>
  )
}

export default FalseIncident