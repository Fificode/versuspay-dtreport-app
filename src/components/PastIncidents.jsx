import React from 'react'
import FalseIncident from './FalseIncident'
import ResolvedIncident from './ResolvedIncident'


const PastIncidents = () => {
  return (
    <>
<h1 className='text-[25px] font-[500] mx-[28px] mt-[10px] mb-[20px]'>Past Incidents</h1>
<FalseIncident title="No Incidents reported today" date="Sep 11, 2022"/>
<ResolvedIncident title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo!" date="Sep 10, 2022" timeresolved="Sep 10, 010:21 UTC" resolved="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo!" timemonitored="Sep 10, 09:21 UTC" monitoring="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo!" timeinvestigated="Sep 10, 08:21 UTC" investigating="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo!"/>
</>
  )
}

export default PastIncidents