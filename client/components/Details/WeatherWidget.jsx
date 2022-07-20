import React, { useState, useEffect } from 'react'
import request from 'superagent'
import { BsCloudSunFill } from 'react-icons/bs'

const Weather = ({ coords }) => {
  const key = '024efa9e18689986e452a3bb9e2bfdde'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${key}`

  const [weatherData, setWeatherData] = useState([{ name: '' }])
  const [loading, setLoading] = useState(false)
  const [weatherData2, setWeatherData2] = useState([{ name: '' }])

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

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            {setLoading === true ? (
              <p>loading..</p>
            ) : (
              <div className="flex flex-col h-[120px] overflow-y-auto p-2 md:h-[250px] md:w-[200px]">
                <div className="flex space-x-2 items-center justify-start">
                  <p className="font-semibold">Weather:</p>
                  <div>
                    <BsCloudSunFill size={18} />
                  </div>
                </div>
                <div className="Location">
                  <p>
                    Location: {weatherData2?.name}, {weatherData2?.sys?.country}
                  </p>
                </div>
                <div>
                  <p> Overhead: {weatherData?.map((item) => item.main)}</p>
                </div>
                <div className="Description">
                  <p>
                    Description: {weatherData?.map((item) => item.description)}
                  </p>
                </div>
                <div className="Wind">
                  <p>Wind Speed: {weatherData2?.wind?.speed} MPH</p>
                </div>
                <div>
                  <p>Humidity: {weatherData2?.main?.humidity}%</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Weather
