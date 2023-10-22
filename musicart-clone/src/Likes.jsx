import React from 'react'
import listImage from './assets/likes2.jpg';
import play from './assets/play.svg';
import cover from './assets/song1.svg';
import more from './assets/more.svg';

function Likes() {
  return (
    <section className='w-full'>
        <section className='relative w-full flex flex-row gap-4 items-end'>
            <img src={listImage} className='rounded-[30px]'/>

            <div className='flex flex-col gap-4'>
              <h2 className='text-4xl font-bold'>Your Likes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
              </p>
              <p>
                Number of Songs <br/>
                Total time to play songs
              </p>

              <button className='p-2 shrink w-fit px-4 rounded-full backdrop-blur backdrop-brightness-75 hover:bg-[#555] flex flex-row items-center gap-2 justify-center transition duration-300 text-white'>
                <span className='p-2 bg-[#facd66] rounded-full'>
                  <img src={play} alt='play-button'/>
                </span>

                <span>
                  Play all
                </span>
              </button>
            </div>
        </section>

        {/* SONG LIST */}
        <section className='w-full p-4 mt-12 flex flex-col gap-4 group'>
          <div className='w-full flex flex-row p-2 bg-[#33373b] backdrop-blur-lg rounded-[15px] shadow-md items-center'>
            <img src={cover} alt='song cover' className='w-16 h-16'/>

            <button className='p-2 bg-[#facd66] rounded-full mx-[5%] opacity-0 group-hover:opacity-100 transition duration-300'>
                  <img src={play} alt='play-button'/>
            </button>

            <span className='w-[40%] ml-[7%]'>
              Name of Song
            </span>
            <span className='w-[20%]'>
              Song category
              {/* States whether it is a Single or part of an album or EP in which case it will state the name of the album or EP */}
            </span>
            <span className='w-[20%]'>
              Time
              {/* Total time for the song to play */}
            </span>
            <button className='w-[5%] mr-0'>
              <img src={more} />
            </button>
          </div>

          <div className='w-full flex flex-row p-2 bg-[#33373b] backdrop-blur-lg rounded-[15px] shadow-md items-center'>
            <img src={cover} alt='song cover' className='w-16 h-16'/>
            <span className='w-[40%] ml-[20%]'>
              Name of Song
            </span>
            <span className='w-[20%]'>
              Song category
              {/* States whether it is a Single or part of an album or EP in which case it will state the name of the album or EP */}
            </span>
            <span className='w-[20%]'>
              Time
              {/* Total time for the song to play */}
            </span>
            <button className='w-[5%] mr-0'>
              <img src={more} />
            </button>
          </div>

          <div className='w-full flex flex-row p-2 bg-[#33373b] backdrop-blur-lg rounded-[15px] shadow-md items-center'>
            <img src={cover} alt='song cover' className='w-16 h-16'/>
            <span className='w-[40%] ml-[20%]'>
              Name of Song
            </span>
            <span className='w-[20%]'>
              Song category
              {/* States whether it is a Single or part of an album or EP in which case it will state the name of the album or EP */}
            </span>
            <span className='w-[20%]'>
              Time
              {/* Total time for the song to play */}
            </span>
            <button className='w-[5%] mr-0'>
              <img src={more} />
            </button>
          </div>

          <div className='w-full flex flex-row p-2 bg-[#33373b] backdrop-blur-lg rounded-[15px] shadow-md items-center'>
            <img src={cover} alt='song cover' className='w-16 h-16'/>
            <span className='w-[40%] ml-[20%]'>
              Name of Song
            </span>
            <span className='w-[20%]'>
              Song category
              {/* States whether it is a Single or part of an album or EP in which case it will state the name of the album or EP */}
            </span>
            <span className='w-[20%]'>
              Time
              {/* Total time for the song to play */}
            </span>
            <button className='w-[5%] mr-0'>
              <img src={more} />
            </button>
          </div>
        </section>
    </section>
  )
}

export default Likes