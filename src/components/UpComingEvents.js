import React from 'react'
import EventCards from './EventCards'
import DJ from './img/dj.png'

function UpComingEvents() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Yaklaşan Etkinlikler <img src={DJ} style={{ maxHeight: '30px' }}/></h1>
      <EventCards />
      <EventCards />
      <EventCards />
      </div>
  )
}

export default UpComingEvents