import React from 'react'
import cover from './assets/song1.svg';
import play from './assets/play.svg';

function Topsongs({name, artist, time, like, image}) {
  return (
    <section className='bg-[#1a1e1f] group hover:bg-bggrey transition duration-300 rounded-[20px] p-4 flex mb-4 flex-row items-center'>
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
            <img src={play} className='w-full h-full rounded-full p-2 bg-[#facd66] opacity-0 group-hover:opacity-100 transition duration-300'/>
        </button>
    </section>
  )
}

export default Topsongs