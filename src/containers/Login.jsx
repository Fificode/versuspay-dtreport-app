import React from 'react'
import logo from '../assets/versuspaylogo.svg'
const Login = () => {
  return (
    <>
     <div className='h-[100vh]'>
        <div className="bg-blue h-[70px] shadow-md">
            <img src={logo} alt="Versus pay logo" className='w-[180px] h-[70px] p-3' />
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-[110px] w-[300px] h-[350px] shadow-md bg-white">
            <h1 className="text-[35px] py-[10px] font-[600] text-black text-center">Log in</h1>
            <div className="flex flex-col  p-3">
              <form >
                <div className="py-[10px]">
                  <label htmlFor="email" className='text-[19px] font-[500]'>Email</label>
                  <input type="email" name="email" id="email" autoComplete="off" value="" required  className='w-[100%] px-[10px] py-[5px] border-[1px] border-solid outline-orange rounded-[5px]' placeholder='Enter email address' />
                </div>
                <div className="py-[10px]">
                  <label htmlFor="password" className='text-[19px] font-[500]'>Password</label>
                  <input type="password" name="password" id="password"  required className='w-[100%] px-[10px] py-[5px] border-[1px] border-solid outline-orange rounded-[5px]' placeholder='Enter password' />
                </div>
                <div className="py-[10px] flex justify-center">
                  <button type="submit" className='w-[100%] px-[10px] py-[5px] text-white bg-blue rounded-[5px] text-center text-[17px] font-[500]'>Log in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login