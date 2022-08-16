import { Route } from 'react-router-dom'

const TripsView = () => {
  return (
    <Route exact path='/trips' render={() => {
      return (
        <div>
          <p>Your Travel Expenses in 2022:</p>
          <button>Present Trips</button>
          <button>Future Trips</button>
        </div>
      )}}
    />
  )
}

export default TripsView