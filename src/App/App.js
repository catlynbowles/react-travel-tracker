
import './App.css';
import { useEffect, useState } from 'react';
import { getData } from '../apiCalls.js'
import { Route, Link } from 'react-router-dom';
import TripsView from '../TripsView/TripsView'
import Form from '../Form/Form'

const App = () => {
  const [traveler, setTraveler] = useState([])
  const [trips, setTrips] = useState([])

  useEffect(() => {
    const travelerData =  getData('http://localhost:3001/api/v1/travelers/22')
    const tripData = getData('	http://localhost:3001/api/v1/trips')

    Promise.all([travelerData, tripData])
      .then(data => {
        setTraveler(data[0])
        setTrips(data[1])
      })
  }, [])

  return (
    <main className="App">
      <h1>Welcome, {traveler.name}!</h1>
      <Route exact path='/' render={() => 
        <div>
          <Link to='/trips'>
            View My Trips
          </Link>
          <Link to='/book-trip'>
            Book a New Trip
          </Link>
        </div>
      }/>
      <Route exact path='/trips' render={() => 
        <TripsView />
      }/>
      <Route exact path='/book-trip' render={() => 
        <Form />
      }/>
    </main>
  );
}

export default App;
