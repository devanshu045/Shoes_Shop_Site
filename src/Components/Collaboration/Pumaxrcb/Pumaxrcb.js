import React from 'react'
import './Pumaxrcb.scss'
import Rcbimages1 from '../../../Assets/RcbImages/RcbImage1.jpg'
import Rcbimages3 from '../../../Assets/RcbImages/Rcbimage3.webp'
import Rcbimages2 from '../../../Assets/RcbImages/Rcbimage2.jpg'

const Pumaxrcb = () => {
  return (
    <div className='pumaxrcb_container'>
         <div className='pumaxrcb_cart1'>
            <img src={Rcbimages1} alt="" />
            <div className="pumaxrcb_cart1_info">
                <h1>Green. Gold. Glory</h1>
                <h3>Puma X Rcb Jersy</h3>
                <button>Sign In</button>
            </div>       
         </div>
         <div className='pumaxrcb_cart2'>
            <img src={Rcbimages1} alt="" />
            <div className="pumaxrcb_cart2_info">
                <h1>Green. Gold. Glory</h1>
                <h3>Puma X Rcb Jersy</h3>
                <button>Sign In</button>

            </div>
         </div>
         <div className='pumaxrcb_cart3'>
            <img src={Rcbimages3} alt="" />
            <div className="pumaxrcb_cart3_info">
                <h1>Green. Gold. Glory</h1>
                <h3>Puma X Rcb Jersy</h3>
                <button>Sign In</button>
            </div>
         </div>

    </div>
  )
}

export default Pumaxrcb