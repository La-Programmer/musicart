import logo from './assets/logo.svg';
import cover from './assets/song1.svg';
import next from './assets/next.svg';
import previous from './assets/previous.svg';
import volume from './assets/volume.svg';
import repeat from './assets/repeat.svg';
import play from './assets/play.svg';
import shuffle from './assets/shuffle.svg';
import {BsSearch} from 'react-icons/bs';
import Home from './icons/Home';
import Collection from './icons/Collection';
import Logout from './icons/Logout';
import Profile from './icons/Profile';
import Radio from './icons/Radio';
import Video from './icons/Video';
import {Link, NavLink} from 'react-router-dom';


function Baselayout({children, background, className}) {

  return (
    <div className={`bg-[#1D2123] flex flex-row w-full h-full ${
      className ? className : ''
    }`} style={{background}}>
      <aside className='top-0 h-screen w-fit py-4 px-2 flex flex-col gap-10 items-center'>
        <Link to='/'>
          <button>
            <img src={logo} alt='logo' className='cursor-pointer'/>
          </button>
        </Link>
        {/* First Icon group */}
        <div className="bg-[#1A1E1F] rounded-full h-fit py-2 px-1 flex flex-col items-center gap-3">
          <NavLink to='/' className='p-0 m-0 w-12 h-10 active:fill-[#FACD66]'>        
              <Home className='w-12 h-12'/>
          </NavLink>

          <NavLink to='/collection' className='p-0 m-0 w-12 h-10'>
              <Collection className='w-8 h-8 mx-auto'/>
          </NavLink>

          <button className='p-0 m-0 w-12 h-10'>
            <Radio className='w-8 h-8 mx-auto'/>
          </button>

          <button className='p-0 m-0 w-12 h-10'>
            <Video className='w-8 h-8 mx-auto'/>
          </button>
        </div>

        {/* Second Icon Group */}
        <div className="bg-[#1A1E1F] rounded-full h-fit py-2 px-1 flex items-center flex-col gap-3">
          <button className='p-0 m-0 w-12 h-10'>
            <Profile className='w-8 h-8 mx-auto'/>
          </button>
          <button className='p-0 m-0 w-12 h-10'>
            <Logout className='w-8 h-8 mx-auto'/>
          </button>
        </div>
      </aside>

      

      <section className='h-full w-full'>
        <nav className='h-73px w-full flex items-center justify-start'>
          <div className='flex flex-row gap-4 items-center'>
            <form>
              <div className='flex flex-row items-center justify-start mx-auto px-4 py-3'>
                <BsSearch className='text-[rgba(255,255,255,0.25)] cursor-pointer'/>
                <input type='text' placeholder='Search artists...' className='bg-transparent px-6 py-2 outline-none text-slate-400'/>
              </div>
            </form>
          </div>
        </nav>

        <section className='p-4'>{children}</section>
      </section>

      {/* Music Player */}
      <section className="h-[17%] w-full backdrop-blur flex flex-row px-4 py-2 items-center fixed bottom-0 left-0 justify-between mx-auto invisible">
        <div className='flex flex-row items-center gap-4'>
          <img src={cover} alt='Song/Album Cover' className='w-20 h-20 rounded-2xl'/>
          <div className='flex flex-col'>
            <p className='text-white '>Seasons In</p>
            <label className='text-[rgba(255,255,255,0.25)]'>James</label>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-[60%] items-center'>
          <div className='flex flex-row gap-6'>
            <button>
              <img src={shuffle} alt='next'/>
            </button>
            <button>
              <img src={previous} alt='previous' className='hover:fill-[#facd66]'/>
            </button>
            <button>
              <img src={play} alt='play/pause' className='transition duration-200 rounded-full hover:bg-[#facd66] p-2'/>
            </button>
            <button>
              <img src={next} alt='next'/>
            </button>
            <button>
              <img src={repeat} alt='repeat'/>
            </button>
          </div>

          <input type='range' className='w-full h-[5px] range accent-[#facd66]'/>
        </div>

        <div className='flex flex-row gap-2 items-center'> 
          <img src={volume} alt='volume'/>
          <input type='range' className='range w-full h-[5px] accent-[#facd66]'/>
        </div>
      </section>
    </div>
  )
}

export default Baselayout
