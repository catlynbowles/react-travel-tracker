import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom';

const PastTrips = () => {
  console.log('hi')
  return (
    <Route path='/past-trips' render={() => 
        <div>past</div>
    }/>
  )
}

export default PastTrips