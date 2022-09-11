import React from 'react'

const Login = () => {
  return (
    <>
     <div className='h-[100vh]'>
        <div className="bg-blue h-[70px] shadow-md">
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/896a831c-c732-4bd0-ad9e-584dabddfe6c/versuspay_new.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220911T002727Z&X-Amz-Expires=86400&X-Amz-Signature=65d085e131d3c0ea91159819f8b448d7e61673584078d7e023ef0bdfcc4ca733&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22versuspay%2520new.svg%22&x-id=GetObject" alt="Versus pay logo" className='w-[180px] h-[70px] p-3' />
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