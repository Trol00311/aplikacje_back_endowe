import React, { useState,} from 'react'
import axios from 'axios'
import './weather.css';


const App=() =>{
 
  const [api, setData] = useState({})
  const [location, setLocation] = useState('')
 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>

          <div className="location">
            <p>{api.name}</p>
          </div>
          <div className="temp">
            {api.main ? <h1>{Math.round(api.main.temp.toFixed()/3.7)+"°C"}</h1> : null}
          </div>
        </div>
  );
}


export default App;
