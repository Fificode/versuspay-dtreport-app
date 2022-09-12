import React, {useState} from 'react'
import Status from '../components/Status'
import PastIncidents from '../components/PastIncidents'

const Report = () => {
     const [pastIncidents, setPastIncidents] = useState(false);
  const viewPastIncidents = () => {
    setPastIncidents(prevState => !prevState);
  }
  return (
    <>
<div className="">
      <div className="bg-blue h-[150px] flex justify-center items-center">
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/896a831c-c732-4bd0-ad9e-584dabddfe6c/versuspay_new.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220911T002727Z&X-Amz-Expires=86400&X-Amz-Signature=65d085e131d3c0ea91159819f8b448d7e61673584078d7e023ef0bdfcc4ca733&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22versuspay%2520new.svg%22&x-id=GetObject" alt="Versus pay logo" className='w-[180px] h-[130px] p-3' />
        </div>
        <div className="px-[20px]">
        <div className="flex justify-center mt-[60px]">
        <div className="bg-green h-[50px] md:h-[60px] w-[98%] rounded-[5px] flex justify-start items-center">
            <div className="flex flex-row">
           <div className="flex items-center pl-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
</div> 
<h1 className='text-white font-[400] text-[18px] md:text-[20px] p-[10px]'>All Systems Operational</h1>
</div>
        </div>
        </div>
        <div className="mt-[50px] ml-[5px] mb-[8px] md:mt-[30px] md:ml-[28px] md:mb-[15px]">
            <h2 className='text-black font-[400] text-[25px] md:text-[30px]'>
                Current Status
            </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap  mb-[40px]">
          <Status title="High-Performance Edge Network" status="Normal"/>
          <Status title="Standard Edge Network" status="Normal"/>
          <Status title="Versuspay Application UI" status="Normal"/>
          <Status title="Packages" status="Normal"/>
          <Status title="API Request" status="Normal"/>
          <Status title="Issues" status="Normal"/>
          <Status title="Actions" status="Normal"/>
          <Status title="Third Party Services" status="Normal"/>
          </div>
        </div>
       {pastIncidents ? <div className="flex justify-end pb-[10px] px-[20px]">
            <div className="">
            <button className='px-[11px] py-[8px] bg-blue rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none my-[10px]' onClick={viewPastIncidents}>Less Incident History</button>
            </div>
        </div> :
        <div className="flex justify-end pb-[10px] px-[20px]">
            <div className="">
            <button className='px-[11px] py-[8px] bg-blue rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none my-[10px]' onClick={viewPastIncidents}>View Incident History</button>
            </div>
        </div>}
        <div className="">
        { pastIncidents ?  <PastIncidents/> : <div></div>}
        </div>
</div>
    </>
  )
}

export default Report