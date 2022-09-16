import React from 'react'

const Incident = ({postsToRender}) => {
  return (
    <div>
       
      {postsToRender.map((post, index) => (
        <div className="my-[20px]" key={index}> 
    <h1 className="text-[18px] font-[500] px-[30px] py-[10px]">{post.date}</h1>
    <div className="flex justify-center"><div className='border-b-[1px] border-solid border-b-gray w-[85%] md:w-[93%] lg:w-[95%] xl:w-[96%] 2xl:w-[98%] px-[20px]'></div></div>
    <p className='text-[16px] font-[400] px-[30px] py-[10px]'>{post.title}</p>
    </div>
      
      ))}
   
    </div>
  )
}

export default Incident