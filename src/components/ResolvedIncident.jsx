import React from 'react'

const ResolvedIncident = ({title, date, resolved, monitoring, investigating, timeresolved, timeinvestigated, timemonitored}) => {
  return (
    <>
        <div className="my-[20px]">
    <h1 className="text-[18px] font-[500] px-[30px] py-[10px]">{date}</h1>
    <div className="flex justify-center"><div className='border-b-[1px] border-solid  border-b-gray w-[85%] md:w-[93%] lg:w-[95%] xl:w-[96%] 2xl:w-[98%] px-[20px]'></div></div>
    <p className='text-[16px] font-[400] px-[30px] py-[10px] text-golden-yellow'>{title}</p>
   <div className="px-[30px] py-[10px]">
    <h2 className="text-[18px] font-[500]">Resolved - </h2>
     <p className="text-[16px] font-[400]  py-[2px]">{resolved}</p>
     <span className='text-gray text-[12px]'>{timeresolved}</span>
   </div>
   <div className="px-[30px] py-[10px]">
    <h2 className="text-[18px] font-[500]">Monitoring - </h2>
     <p className="text-[16px] font-[400]  py-[2px]">{monitoring}</p>
      <span className='text-gray text-[12px]'>{timemonitored}</span>
   </div>
   <div className="px-[30px] py-[10px]">
    <h2 className="text-[18px] font-[500]">Investigating - </h2>
     <p className="text-[16px] font-[400]  py-[2px]">{investigating}</p>
      <span className='text-gray text-[12px]'>{timeinvestigated}</span>
   </div>
    </div>
    </>
  )
}

export default ResolvedIncident