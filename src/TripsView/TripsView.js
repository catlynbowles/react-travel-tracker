import { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { getData } from '../apiCalls'
import DayJS from 'react-dayjs';


const TripsView = ({travelerID}) => {
  const [trips, setTrips] = useState([])
  const [today, setToday] = useState('')

  useEffect(() => {
    getData('	http://localhost:3001/api/v1/trips')
      .then(data => setTrips(data))
  }, [])

  const getToday = () => {
    const todaysDate = new Date()
    setToday(DayJS(todaysDate))
  }

  const getPastTrips = () => {
    const pastTrips = trips.filter(trip => {
      console.log(trip)
    })
    return pastTrips
  }

  return (
    <div>
      <Route exact path='/trips' render={() => {
        return (
          <div>
            <p>Your Travel Expenses in 2022:</p>
            <Link to='/past-trips'>
              <button>Past Trips</button>
            </Link>
            <button>Future Trips</button>
          </div>
        )}}
      />
    </div>
  )
}

export default TripsView