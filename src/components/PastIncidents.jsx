import React, {useState, useEffect} from 'react'
// import FalseIncident from './FalseIncident'
// import ResolvedIncident from './ResolvedIncident'
import Incident from './Incident'
import IncidentHistory from '../utilities/IncidentHistory'

const PastIncidents = () => {
  const postsPerPage = 3;
let arrayForHoldingPosts = [];

 const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = IncidentHistory.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  return (
    <>
<h1 className='text-[25px] font-[500] mx-[28px] mt-[10px] mb-[20px]'>Past Incidents</h1>
{/* <FalseIncident title="No Incidents reported today" date="Sep 11, 2022"/>
<ResolvedIncident title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo!" date="Sep 10, 2022" timeresolved="Sep 10, 010:21 UTC" resolved="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo!" timemonitored="Sep 10, 09:21 UTC" monitoring="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo!" timeinvestigated="Sep 10, 08:21 UTC" investigating="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo!"/> */}
 <Incident postsToRender={postsToShow} />
      <button onClick={handleShowMorePosts} className="px-[11px] py-[8px] bg-blue rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none my-[10px]">Load more</button>
</>
  )
}

export default PastIncidents