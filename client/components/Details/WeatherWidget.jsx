import React, { useState, useEffect } from 'react'
import request from 'superagent'

const Weather = ({ coords }) => {
  const key = '024efa9e18689986e452a3bb9e2bfdde'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${key}`
  //console.log(coords, 'weather.jsx')
  // console.log(key, 'key')
  //console.log(url, 'coords array from weather.jsx')

  const [weatherData, setWeatherData] = useState([{ name: '' }])
  const [loading, setLoading] = useState(false)
  const [weatherData2, setWeatherData2] = useState([{ name: '' }])

  //useEffect
  //dependancy pass coords
  // [coords[0], coords[1]]

  function fetchWeather() {
    return request.get(url).then((response) => {
      console.log(response.body.weather)
      return response?.body
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchWeather()
      .then((data) => {
        setWeatherData(data.weather)
        console.log(data.weather, 'setWeatherData')
      })
      .catch((err) => console.error(err.message))
  }, [coords[0], coords[1]])

  useEffect(() => {
    setLoading(true)
    fetchWeather()
      .then((data) => {
        setWeatherData2(data)
        console.log(data, 'setWeatherData2')
      })
      .catch((err) => console.error(err.message))
  }, [coords[0], coords[1]])

  // console.log(weatherData, 'weather data')
  // console.log(weatherData2, 'weather data')
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            {setLoading === true ? (
              <p>loading..</p>
            ) : (
              <>
                <div className="Location">
                  <p>
                    Location: {weatherData2?.name}, {weatherData2?.sys?.country}
                  </p>
                </div>
                <div className="Description">
                  <p>
                    Overhead: {weatherData?.map((item) => item.main)}
                    <br></br>
                    Description: {weatherData?.map((item) => item.description)}
                  </p>
                </div>
                <div className="Wind">
                  <p>Wind Speed: {weatherData2?.wind?.speed} MPH</p>
                </div>
                <div>
                  <p>Humidity: {weatherData2?.main?.humidity}%</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Weather
