export interface LatLon {
  lat: number
  lon: number
}

export enum PREFECTURE_LIST {
  SAPPORO='札幌',
  KYOTO='京都',
  TOKYO='東京',
  OSAKA='大阪',
  OKINAWA='沖縄',
}

export const PREFECTURAL_SEAT_LIST: Map<string, LatLon> = new Map([
  [
    PREFECTURE_LIST.SAPPORO,
    {lat: 43.06417, lon: 141.34694},
  ],
  [
    PREFECTURE_LIST.KYOTO,
    {lat: 35.02139, lon: 135.75556},
  ],
  [
    PREFECTURE_LIST.TOKYO,
    {lat: 35.68944, lon: 139.69167},
  ],
  [
    PREFECTURE_LIST.OSAKA,
    {lat: 34.68639, lon: 135.52},
  ],
  [
    PREFECTURE_LIST.OKINAWA,
    {lat: 26.2125, lon: 127.68111},
  ]
])