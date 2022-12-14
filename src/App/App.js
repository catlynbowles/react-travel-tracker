
import './App.css';
import { useEffect, useState } from 'react';
import { getData } from '../apiCalls.js'
import { Route, Link, Switch } from 'react-router-dom';
import TripsView from '../TripsView/TripsView'
import Form from '../Form/Form'
import PastTrips from '../PastTrips/PastTrips'

const App = () => {
  const [traveler, setTraveler] = useState([])

  useEffect(() => {
    getData('http://localhost:3001/api/v1/travelers/22')
      .then(data => setTraveler(data))
    }, [])

  return (
    <main className="App">
      <h1>Welcome, {traveler.name}!</h1>
      <Switch>
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
          <TripsView travelerID={traveler.id}/>
        }/>
        <Route exact path='/book-trip' render={() => 
          <Form />
        }/>
        
      </Switch>
    </main>
  );
}

export default App;
