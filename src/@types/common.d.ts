declare module '*.svg'
declare module '@nivo/line'
declare module '@nivo/core'


export interface RandomObject {
  [key: string]: any
}

export interface GrafType {
  [key: string]: {
    name: string,
    graf: () => void
  }
}


export interface User {
  email: string
  password?: string
  username: string
  sex: string
  date: string
  name: string
  surname: string
  patronymic: string
  phone?: string
  avatar?: string
}

export interface WeatherHook {
    daily?: [RandomObject],
    current?: RandomObject
}
