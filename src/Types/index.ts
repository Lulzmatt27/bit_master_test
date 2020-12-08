export interface IAddresses {
  address: string,
  lat: number | string,
  lon: number | string
}

export interface IClientInfo {
  source_time: string,
  addresses: IAddresses[]
}

export interface Crew {
  crew_id: number,
  car_mark: string,
  car_model: string,
  car_color: string,
  car_number: string,
  driver_name: string,
  driver_phone: string,
  lat: number,
  lon: number,
  distance: number
}

export interface ICrewsInfo {
  code: number,
  descr: string,
  data: {
    crews_info: Crew[]
  }
}

export interface ISearchCrew {
  type: string,
  payload?: IClientInfo | ICrewsInfo
}

export type orderInfo = {
  [key: string]: string,
}

export interface ICreateOrder {
  orderInfo: orderInfo
}

export interface IOrderSuccess {
  code: number,
  descr: string,
  data: {
    order_id: string
  }
}

export interface IOrder {
  type: string,
  payload?: ICreateOrder | IOrderSuccess
}