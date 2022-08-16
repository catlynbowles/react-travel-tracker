export { useState, useEffect } from 'react'

const TripCard = ({duration, date}) => {
  return (
    <div>
      <p>{duration}</p>
      <p>{date}</p>
    </div>
  )
}

export default TripCard