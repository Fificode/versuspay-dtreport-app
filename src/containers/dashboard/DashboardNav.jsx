import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from "../../utilities/NavDB";
import {MenuIcon, XIcon} from '@heroicons/react/outline';


const DashboardNav = () => {
     const [nav, setNav] = useState(false);
     const handleClick = () => setNav(!nav);

  return (
    <>
<div className='fixed top-0 left-0 min-h-[100vh] w-[250px]'>
    <nav className={!nav ? 'hidden' : 'border-r  min-h-[100vh] w-[250px] pt-8 px-1 flex flex-col items-start justify-between bg-blue text-white' }>
        <div className="flex flex-col">
            <div className="flex flex-col pl-[20px] xl:flex-row xl:pl-[30px] xl:-pb-[20px]">
      <div className="pr-[8px]"><img src="" alt="Logo" className='w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] rounded-[50%]' /></div>
    </div>
             <div className="lg:hidden" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-blue m-2 absolute top-[20px] right-0' /> : <XIcon className='w-10 text-white m-2 absolute top-[20px] left-[200px]'/>}
</div>
     <div className='space-y-8 w-full'>
   
       
{navLinks.map((link) => 
          <NavItem link={link} key={link.id} />
        )}
        <div className="flex items-center space-x-8 px-5  cursor-pointer">
            <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg></span>
      <button className="text-light-black group-hover:text-black group-hover:font-[900] ">
      Log out
      </button>
    </div>
      </div>
     
</div>
    </nav>
    
    </div>
   </>
    )
function NavItem({ link }) {
  const [activeNav, setActiveNav] = useState(true);
  return (
    <Link to={link.path} onClick={() => setActiveNav(link.id)}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-white hover:border-l-4 hover:border-transparent
       ${
         activeNav === link.id && "border-white border-l-4"
       }
  `}
       >
    
      <span> {link.icon}</span>
      <h1
        className={`text-white group-hover:text-black 
        ${
          activeNav === link.id && "text-black"
        }
  `}
       >
        {link.title}
      </h1>
    
    </Link>
  );
  
}
   
 
}

export default DashboardNav