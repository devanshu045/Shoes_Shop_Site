import React, { useEffect, useState } from 'react'
import './Landingtag.scss'

const Landingtag = () => {
  const [Offertag,setOffertag] = useState(0);

  const tags = [
    'EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENTS. (NOT APPLICABLE ON FENTY x PUMA)',
    'FREE SHIPPING ON ALL ONLINE PAYMENTS'
  ]


  
    useEffect(() => {

      const timer = setInterval(()=>{  
      setOffertag((prevHeading) => (prevHeading + 1) % tags.length);
      },5000)
      console.log(Offertag)

      return () => clearTimeout(timer);

    },[Offertag])

   
   


  return (
    <div className="landingtag_main">
    <h1 className='landingtag_heading'>{tags[Offertag]}</h1>
    </div>
  )


}


export default Landingtag