import React from 'react'
import Baselayout from './Baselayout'

function Collection() {
  return (
    <Baselayout>
        <section>
            <div className='flex flex-row gap-6 m-8'>
              <div className='p-2 border border-gray-700 rounded-full'>
                <p>My Collection</p>
              </div>

              <div className='p-2 border border-gray-700 rounded-full'>
                <p>Likes</p>
              </div>
            </div>
        </section>
    </Baselayout>
  )
}

export default Collection