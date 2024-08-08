import React from 'react'

const Sidebar = () => {
    return (

        <div className='w-[100%] h-[50%] flex '>

            <div className="flex-col h-[180px] w-[140px] bg-green-200  m-2  text-center border-black ">
                <p>more</p>
                <p>than 2</p>
                <p>itemss</p>
                ________________
                <p className='font-bold'> Get 5 % off </p>
                <p className='font-extrabold  m-2 '> ₹2849 item </p>
                <div className='bg-green-800 font-bold text-white h-7 w-[130px]'>Most popular </div>
            </div>
         
            <div className="flex-col h-[180px] w-[140px] bg-green-200  m-2  text-center border-b-8 ">
                <p>more</p>
                <p>than 5</p>
                <p>itemss</p>
                ________________
                <p className='font-bold'> Get 6 % off </p>
                <p className='font-extrabold  m-2 '> ₹2789 item </p>
                <div className='bg-slate-600 font-bold  h-7 w-[130px]  text-white'>Best value </div>
            </div>
            <div className="flex-col h-[180px] w-[140px] bg-green-200  m-2 text-center border-slate-600 ">
                <p>corporate </p>
                <p className='m-3'>deal </p>

                ________________
                <p className='m-2'></p>
                <p className='font-bold m-2'> Click to Enquire </p>
                <div className='bg-slate-600 font-bold  h-7 w-[130px]  text-white '>Bulk Order </div>
            </div>

        </div>

        
    )
}

export default Sidebar
