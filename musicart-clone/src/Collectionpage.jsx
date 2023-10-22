import React from 'react'
import Baselayout from './Baselayout'
import { NavLink, Outlet } from 'react-router-dom'

function Collection() {
  return (
    <Baselayout background={"url(/src/assets/chart-bg3.svg)"}>
        <section className='text-[#ddd]'>
            <div className='flex flex-row gap-6 m-4'>
              <NavLink to='collections' className={({isActive}) => isActive ? "p-[10px] bg-[#facd66] border border-[#facd66] rounded-[27px]" : "p-[10px] border border-gray-500 rounded-[27px] hover:bg-[#FACD66] hover:bg-opacity-100 hover:shadow-lg hover:border-[#facd66] transition duration-200"}>
                <p className='text-center mx-4 font-extralight'>My Collection</p>
              </NavLink>

              <NavLink to='likes' className={({isActive}) => isActive ? "p-[10px] bg-[#facd66] border border-[#facd66] rounded-[27px]" : "p-[10px] border border-gray-500 rounded-[27px] hover:bg-[#FACD66] hover:bg-opacity-100 hover:shadow-lg hover:border-[#facd66] transition duration-200"}>
                <p className='text-center mx-4 font-extralight'>Likes</p>
              </NavLink>
            </div>

            {/* SECTION FOR DISPLAYING COLLECTION AND LIKES */}

            <section className='m-4'>
              <Outlet/>
            </section>
        </section>
    </Baselayout>
  )
}

export default Collection