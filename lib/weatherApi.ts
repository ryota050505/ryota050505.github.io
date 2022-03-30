import axios from 'axios'

const OPEN_WEATHER_URL = process.env.WEATHER_ENDPOINT_URL
const OPEN_WEATHER_API_KEY = process.env.WEATHER_API_KEY

export const fetchCurrentWeatherInfo = async (city: string) => {
  try {
    const res = await axios.get(`${OPEN_WEATHER_URL}weather?q=${city},jp&units=metric&appid=${OPEN_WEATHER_API_KEY}`,
      {
        headers:
          {
            'Content-type': 'application/json',
          }
      }
    )
    const weather = parseWeatherInfo(res.data)
    console.log("current")
    console.log(weather)
    return weather
  } catch(err) {
    console.error(err)
  }
}

export const fetchThreeWeatherInfo = async (city: string) => {
  try {
    const res = await axios.get(`${OPEN_WEATHER_URL}forecast?q=${city},jp&units=metric&appid=${OPEN_WEATHER_API_KEY}`,
      {
        headers:
          {
            'Content-type': 'application/json',
          }
      }
    )
    console.log("three")
    console.log(res.data)
    return res.data
  } catch(err) {
    console.error(err)
  }
}

// 天気情報整形
const parseWeatherInfo = (info: object) => {
  return info
}