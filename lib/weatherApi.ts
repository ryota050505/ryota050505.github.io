import axios from 'axios'

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

// 天気情報整形
const parseWeatherInfo = (info: object) => {
  return info
}