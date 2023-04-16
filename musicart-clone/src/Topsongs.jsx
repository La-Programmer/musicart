import React from 'react'
import cover from './assets/song1.svg';
import heart from './assets/heart1.svg';

function Topsongs({name, artist, time, like, image}) {
  return (
    <section className='bg-[#1a1e1f] rounded-[20px] p-4 flex mb-4 flex-row items-center'>
        <div className="w-[20%] mr-4">
            <img src={cover} className='w-full h-full'/>
        </div>
        <div className="w-[60%] flex flex-col mr-4">
            <div>
                <p>Golden age of the 80s</p>
            </div>
            <div>
                <p>Sean Swaddler</p>
            </div>
            <div>
                <p>2:34:45</p>
            </div>
        </div>
        <button className='w-[10%]'>
            <img src={heart} className='w-full h-full rounded-full border p-2 border-slate-50/20'/>
        </button>
    </section>
  )
}

export default Topsongs