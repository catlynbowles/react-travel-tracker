
const PastTrips = ({trips}) => {
  const pastTrips = trips.map(trip => {
    return (
      <TripCard 
        date={trip.date}
        duration={trip.duration}
      />
    )
  })
  return (
    <div>
      {pastTrips}
    </div>
  )
}

export default PastTrips