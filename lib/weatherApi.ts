import axios from 'axios'

import { PREFECTURAL_SEAT_LIST } from '~/constants/Weather'

export const fetchCurrentWeatherInfo = async (OPEN_WEATHER_URL: string, API_KEY: string, city: string) => {
  try {
    const res = await axios.get(`${OPEN_WEATHER_URL}weather?q=${city},jp&units=metric&appid=${API_KEY}`,
      {
        headers:
          {
            'Content-type': 'application/json',
          }
      }
    )
    const weather = parseWeatherInfo(res.data)
    return weather
  } catch(err) {
    console.error(err)
  }
}

export const fetchThreeWeatherInfo = async (OPEN_WEATHER_URL: string, API_KEY: string, city: string) => {
  try {
    const res = await axios.get(`${OPEN_WEATHER_URL}forecast?q=${city},jp&units=metric&appid=${API_KEY}`,
      {
        headers:
          {
            'Content-type': 'application/json',
          }
      }
    )
    return res.data
  } catch(err) {
    console.error(err)
  }
}

export const fetchOnecallWeatherInfo = async (OPEN_WEATHER_URL: string, API_KEY: string, PREFECTURE: string) => {
  const latlon = PREFECTURAL_SEAT_LIST.get(PREFECTURE)
  try {
    if (typeof latlon === 'undefined') {
      throw new TypeError('latlon is Undefined')
    }
    const res = await axios.get(`${OPEN_WEATHER_URL}onecall?lat=${latlon.lat}&lon=${latlon.lon}&units=metric&lang=jp&appid=${API_KEY}`,
      {
        headers:
          {
            'Content-type': 'application/json',
          }
      }
    )

    return res.data
  } catch(err) {
    console.error(err)
  }
}

// 天気情報整形
const parseWeatherInfo = (info: object) => {
  return info
}