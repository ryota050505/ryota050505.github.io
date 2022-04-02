type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

type Clouds = {
  all: number
}

type Wind = {
  speed: number
  deg: number
  gust: number
}

type Sys = {
  pod: string
}

type WeatherDetail = {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
}

type Coord = {
  lat: number
  lon: number
}

type City = {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrize: number
  sunset: number
}

export type ForestWeather = {
  cod: string
  message: number
  cnt: number
  list: WeatherDetail[]
  city: City
}

export type CurrentWeather = {
  id: number
  name: string
  main: Main
}
