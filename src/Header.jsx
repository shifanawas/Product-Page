import React from 'react'
const Header = () => {
  return (
<>
      <div className='bg-slate-100 flex w-full h-15'>
        <div className="w-[5%] p-2 bg-slate-100 rounded-2xl">

        <img
          className="h-15 w-15"
            src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
        />
        </div>
        <div className="w-[95%] flex justify-around items-center px-20  bg-slate-100">
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" >Categories</p>
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" >boAt Personalisation</p>
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" >Gift with boAt</p>
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" >Corporate Orders</p>
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" >
            <option>  More</option> </p>
          
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" ></p>
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" ></p>
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" >
            <input       type="text"   className="w-[100%] bg-gray-200 rounded-xl"   />
          </p>
          <p className=" bg-slate-100 p-3 rounded-2xl hover:bg-slate-100 cursor-pointer" ></p>
     
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" >
            <img
              className="h-8 w-8"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989"
            />
          </p>
          <p className=" bg-slate-100 p-3 rounded-2xl hover:font-bold cursor-pointer" >
          </p>

      
</div>
 </div>
      
    </>
  )
}

export default Header
