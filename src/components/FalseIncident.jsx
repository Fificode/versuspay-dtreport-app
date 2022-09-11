import React from 'react'

const FalseIncident = ({date, title}) => {
  return (
    <>
<div className="my-[20px]">
    <h1 className="text-[18px] font-[500] px-[30px] py-[10px]">{date}</h1>
    <div className="flex justify-center"><div className='border-b-[1px] border-solid border-b-black w-[97%] px-[20px]'></div></div>
    <p className='text-[16px] font-[400] px-[30px] py-[10px]'>{title}</p>
    
</div>
    </>
  )
}

export default FalseIncident