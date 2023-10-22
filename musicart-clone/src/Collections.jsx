import React from 'react'
import cover from './assets/song1.svg';
import play from './assets/play.svg';

function Collections() {
  return (
    <section className='flex flex-row gap-6 justify-start w-full wrap'>
        {/* A MAP FUNCTION TO HANDLE THE DISPLAY FOR ALL OF THE ADDED COLLECTIONS */}

        {/* But for now just for checks */}
        <div className='relative min-w-[20%] group overflow-hidden rounded-[40px]'>
            <img src={cover} className='group-hover:scale-150 transition-all duration-300 w-full'/>
            <div className='relative text-[#e9edf0] ml-6 mt-[-30%] mb-4'>
                <p className='text-4xl font-normal'>
                    Limits
                </p>
                <p className='text-sm font-light'>
                    John Watts
                </p>
            </div>
            
            <button className='absolute top-[75%] right-[8%] w-fit bg-[#facd66] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full p-4'>
                <img src={play} alt='play-button'/>
            </button>
        
        </div>

        <div className='relative min-w-[20%] group overflow-hidden rounded-[40px]'>
            <img src={cover} className='group-hover:scale-150 transition-all duration-300 w-full'/>
            <div className='relative text-[#e9edf0] ml-6 mt-[-30%] mb-4'>
                <p className='text-4xl font-normal'>
                    Limits
                </p>
                <p className='text-sm font-light'>
                    John Watts
                </p>
            </div>
            
            <button className='absolute top-[75%] right-[8%] w-fit bg-[#facd66] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full p-4'>
                <img src={play} alt='play-button'/>
            </button>
            
        </div>
        {/* <div className='min-w-[18%]'>
            <img src={cover} className='rounded-[20px] w-full'/>
            <div className='relative text-[#1d2123] ml-4 mt-[-35%]'>
                <p className='text-4xl font-normal'>
                    Limits
                </p>
                <p className='text-sm font-light'>
                    John Watts
                </p>
            </div>
        </div>
        <div className='min-w-[18%]'>
            <img src={cover} className='rounded-[20px] w-full'/>
            <div className='relative text-[#1d2123] ml-4 mt-[-35%]'>
                <p className='text-4xl font-normal'>
                    Limits
                </p>
                <p className='text-sm font-light'>
                    John Watts
                </p>
            </div>
        </div>
        <div className='min-w-[18%]'>
            <img src={cover} className='rounded-[20px] w-full'/>
            <div className='relative text-[#1d2123] ml-4 mt-[-35%]'>
                <p className='text-4xl font-normal'>
                    Limits
                </p>
                <p className='text-sm font-light'>
                    John Watts
                </p>
            </div>
        </div> */}
    </section>
  )
}

export default Collections