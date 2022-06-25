import React from 'react'

const TravelCardTemplate = ({country, image, location, date, desc}) => {
  return (
    <div>
      <img width='125px' height='168' className='rounded-3' src={image} alt=''/>
      <p>{country}</p>
      <span>View on Google Maps</span>
      <h3>{location}</h3>
      <p>{date}</p>
      <p>{desc}</p>
    </div>
  )
}

export default TravelCardTemplate
