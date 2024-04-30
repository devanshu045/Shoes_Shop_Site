import React from 'react'
import video1 from '../../../Assets/Videos/pumaxfentyvideo.mp4'
import './Pumaxfenty.scss'

const Pumaxfenty = () => {
  return (
    <div className='pumaxfenty_main' >
      <video src={video1} autoPlay loop muted >
            </video>
    </div>
  )
}

export default Pumaxfenty;