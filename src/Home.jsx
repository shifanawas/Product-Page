import React from 'react'
import Sidebar from './Sidebar'
import Sliderbar2 from "./Sliderbar2"
import p1 from "./assets/1.webp"
import p2 from "./assets/2.webp"
import p3 from "./assets/3.webp"
import p4 from "./assets/4.webp"
import p5 from "./assets/5.webp"
const Home = () => {
  return (


    <div className='w-full h-full flex '>

      <div className="w-[15%]  bg-white  flex-col p-4">

        <div className="flex-col h-[50px] w-[50px]  m-2  bg-slate-100 ">

          <img className='w-full h-full' src={p1} />
        </div>
        <div className="flex-col h-[50px] w-[50px] m-2 bg-slate-100">
          <img className='w-full h-full ' src={p2} />
        </div>
        <div className="flex-col h-[50px] w-[50px] m-2 bg-slate-100">
          <img className='w-full h-full' src={p3} />
        </div>
        <div className="flex-col h-[50px] w-[50px] m-2 bg-slate-100">
          <img className='w-full h-full' src={p4} />
        </div>
        <div className="flex-col h-[50px] w-[50px] m-2 bg-slate-500">
          <img className='w-full h-full ' src={p5} />
        </div>

      </div>
      <div className="w-[100%] p-4 bg-slate-300  m-6 h-[530px] flex">
        <div className="flex-col m-3">
          <img className='w-full h-full' src={p1} />
        </div>

      </div>

      <div className="w-[50%] p-4 bg-white  m-2 flex-col">

        
        <div className="flex-col h-15 w-[500px]  m-2  bg-slate-100 ">
          <p className='flex'>
            <div className='font-extrabold text-2xl text-yellow-400 '>*</div>
            <p className='gap-5'>48 | 8 reviews </p>
            <div className='font-bold text-xl text-green-400'>*✓</div>

            <label className='bg-red-500 rounded-xl justify-around gap 4'>  Earn upto 149 boAT reward points on this product    .</label>
                    </p>
               </div>
        <div className="flex-col h-10 w-[500px]  m-1 font-bold bg-white text-4xl ">
     Nirvana Nebula
        </div>
        <div className="flex-col h-8 w-[700px]  m-1  bg-white ">
Wireless Earbuds with ANC upto 35dB Dolby Audio boAt signature sound Beast mode
        </div>

        
        <div className="flex-col h-8 w-[500px]   bg-white flex">
         
          <p className='flex gap-5 ' >  ₹2999 <p className='line-through gap-5'> ₹12000</p> <p className='text-green-500  gap-5font-bold'>77% Off
          </p>  <p className='bg-slate-300 text-red-500 font-bold'> Don't miss this boAt! only 8 unit left !</p> </p>
        </div>
       
        <div className="flex-col h-8 w-[500px]   bg-white  flex">
          <p className='font-bold flex gap-5'>Choose your Colour :  <p className=''>Celestial White</p>  </p>
        </div>
        <div className="flex-col h-8 w-[700px]   bg-white ">
         Check Delivery
        </div>
        <div className=""></div>
        <div className="h-[25px] w-[400px] m-1 bg-slate-200 flex">
          <p className='bg-slate-100 flex w-[300px] text-slate-400'>12008   </p> <p className='bg-slate-950 text-center h-[25px] text-white w-[100px] flex-col m-2'> Change </p>
        
        </div>
        <div className="flex-col h-8 w-[700px]  m-1  bg-white ">
          <p className='text-green-400 font-bold flex gap-3'>  Free delivery   < p className='text-slate-500 font-bold'> |  By wednessday ,Aug 7 </p> </p>
        </div>

        <div className="flex-col h-5 w-[700px]  m-1  bg-white ">
          <p className='flex gap-5'>if ordered within <p className='text-red-400'> 21 hts 49 mins</p>   </p>  
        </div>
        <div className="flex-col h-5 w-[700px]  m-1  bg-white ">
          Active orders
        </div>


        <div className="flex-col h-[100px] w-[200px] ">
       <Sidebar/>
        </div>
     


      </div>


    </div>


  )
}

export default Home
