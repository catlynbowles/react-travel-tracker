import { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { getData } from '../apiCalls'
import dayjs from 'dayjs';
import PastTrips from '../PastTrips/PastTrips';


const TripsView = ({travelerID}) => {
  const [trips, setTrips] = useState([])
  const [today, setDate] = useState('')

  useEffect(() => {
    getData('http://localhost:3001/api/v1/trips')
      .then(data => {
        setTrips(data)
        setDate(dayjs().format("YYYY-MM-DD"))
    })
  }, [])

  const getPastTrips = () => {
    if (trips.length) {
      const pastTrips = trips.filter(trip => {
        if (trip.date < today && trip.userID === travelerID) {
          return trip
        }
      }) 
      return pastTrips
    } 
  }

  return (
    <div>
      <Route exact path='/trips' render={() => {
        return (
          <div>
            <p>Your Travel Expenses in 2022:</p>
            <Link to='/trips/past-trips'>
              <button>Past Trips</button>
            </Link>
            <button>Future Trips</button>
          </div>
        )}}
      />
      <Route exact path='/trips/past-trips' render={() => 
        <PastTrips pastTrips={getPastTrips()}/>
    } />
    </div>
  )
}

export default TripsView