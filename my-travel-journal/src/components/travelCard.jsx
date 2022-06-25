import React from 'react'
import {card} from './card'
import TravelCardTemplate from './travelCardTemplate'

const TravelCard = () => {
    const cards = card.map(card => {
        return (
            <TravelCardTemplate
            key={card.id}
            image={card.image}
            country={card.country}
            date={card.date}
            desc={card.desc}           
            />
        )
    }
    )
  return (
    <div>
      {cards}
    </div>
  )
}

export default TravelCard
