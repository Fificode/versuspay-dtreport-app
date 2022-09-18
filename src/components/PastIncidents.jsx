import React, {useState, useEffect} from 'react'
import Incident from './Incident'
import {incidentHistory} from '../utilities/IncidentHistory'

const PastIncidents = () => {
  const postsPerPage = 3;

  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);
 
const loopWithSlice = (start, end) => {
    let arrayForHoldingPosts = [];
    const slicedPosts = incidentHistory.slice(start, end);
    arrayForHoldingPosts = [...postsToShow, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };
      
   useEffect(() => {
    loopWithSlice(0, postsPerPage);
  },[]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  return (
    <>
<h1 className='text-[25px] font-[500] mx-[28px] mt-[10px] mb-[20px]'>Past Incidents</h1>
 <Incident postsToRender={postsToShow} />
 <div className="flex justify-end">
  <div>
      <button onClick={handleShowMorePosts} className="px-[11px] py-[8px] bg-blue rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none mx-[20px] my-[10px]">Load more</button>
      </div>
      </div>
</>
  )
}

export default PastIncidents