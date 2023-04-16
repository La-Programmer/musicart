import React from 'react';
import Topsongs from './Topsongs';
import Baselayout from './Baselayout';
import user1 from './assets/user1.svg';
import user2 from './assets/user2.svg';
import user3 from './assets/user3.svg';
import user4 from './assets/user4.svg';
import user5 from './assets/user5.svg';
import wave from './assets/wave.svg';
import heart from './assets/heart.svg';
import esma from './assets/esma.svg';
import cover from './assets/song1.svg';

function Home() {
  return (
    <Baselayout>
        <section className='flex flex-col gap-6 m-2 w-[100%] text-white'>
            <div className='flex flex-row items-center gap-4'>
                <div className='flex flex-row gap-6'>
                    <div className='flex flex-row rounded-[40px] border-white bg-[#609eaf] overflow-hidden relative shadow-md]'>
                        <div className="absolute left-[16%] z-0 w-full h-full rounded-[40px]">
                            <img src={wave} className='w-full h-full' alt='wave ripple'/>
                        </div>
                        <div className='flex flex-col p-10 justify-between'>
                            <p className='text-white text-sm font-thin'>Currated Playlist</p>
                            <div className="text-white mt-16">
                                <h3 className="text-3xl font-semibold">R & B Hits</h3>
                                <p className='font-thin mt-6 leading-5'>
                                    All mine, Lie again, Petty call me everyday,<br/>
                                    Out of time, No love, Bad habit,<br/>
                                    and so much more
                                </p>
                            </div>

                            {/* User Pictures */}                        
                            
                            <div className='flex flex-row justify-start items-center mt-16'>

                                <div className='w-[70px] flex flex-row items-center justify-start h-fit relative'>
                                    <img src={user1} className="w-10 h-10 rounded-full absolute left-0"/>
                                    <img src={user2} className="w-10 h-10 rounded-full absolute left-[20%]"/>
                                    <img src={user3} className="w-10 h-10 rounded-full absolute left-[40%]"/>
                                    <img src={user4} className="w-10 h-10 rounded-full absolute left-[60%]"/>
                                    <img src={user5} className="w-10 h-10 rounded-full absolute left-[80%]"/>
                                </div>

                                <img src={heart} className="ml-10"/><p className='ml-2'>33k Likes</p>
                            </div>
                        </div>
                        
                            <img className='p-0 z-10' src={esma}/>
                                
                    </div>
                </div>
                
                {/* TOP SONGS */}
                <div className="">
                    <Topsongs/>
                    <Topsongs/>
                    <Topsongs/>
                </div>
            </div>

            {/* NEW RELEASES */}
            <section className='pt-10 w-full'>
                <h4 className='text-white font-bold py-2 text-2xl'>New Releases</h4>

                <div className='flex flex-row gap-4 justify-start items-center snap-x snap-mandatory w-full overflow-x-auto scrollbar-hide box-border'>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                </div>
            </section>

            {/* POPULAR IN YOUR AREA */}
            <section>
                <h4 className='text-white font-bold py-2 text-2xl'>Popular in your area</h4>

                <div className='flex flex-row gap-4 justify-start items-center snap-x snap-mandatory w-full overflow-x-auto scrollbar-hide box-border'>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                    <div className='snap-start min-w-fit flex flex-col items-start gap-2'>
                        <img src={cover} alt='2' className='rounded-[25px]'/>
                        <p className='text-white font-extralight'>Song1</p>
                        <p className='text-sm text-[rgba(255, 255, 255, 0.5)]'>Sean Swaddler</p>
                    </div>
                </div>
            </section>
        </section>
    </Baselayout>
  )
}

export default Home