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

interface Minutely {
  dt: number
  precipitation: number
}

interface Temp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

interface FeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

export interface Base {
  dt: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Weather[]
}

export interface Current extends Base {
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
}

export interface Hourly extends Base {
  temp: number
  feels_like: number
  pop: number
}

export interface Daily extends Base {
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: Temp
  feels_like: FeelsLike
  pop: number
  rain: number
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

export type OnecallWeather = {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: Current
  minutely: Minutely[]
  hourly: Hourly[]
  daily: Daily[]
}
