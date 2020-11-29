import {format} from 'date-fns'
const carMarks = ['Chevrolet','Toyota','Ford','BMW']
const carModel = ['Chevrolet','Corolla','Mustang','x5']
const carColor = ['Синий','Красный','Зеленый','Черный']
const carNumber = ['Е234КУ','У224КУ','О000ОК','В999ВК']


export const getColorByName = (colorName: string): string => {
  switch(colorName) {
    case 'Синий':
      return '#0000ff'
    case 'Красный':
      return '#ff0000'
    case 'Зеленый':
      return '#00ff00'
    case 'Черный':
      return '#000000'
    default:
      return '000000'
  }
}
/**
 * descr генерирует строку формата ГГГГММДДччммсс по текущей дате new Date()
 */
export const generateSourceTime = (): string => {
  return format(new Date(),'yyyyMMddHHmmss')
}
/**
 * lat: number,
 * lon: number
 * генерирует список экипажей
 */
export const generateCrews = (lat: number,lon: number) => {
  const crews = []
  for(let i = 1; i <= 4; i += 1) {
    let randLat = lat;
    let randLon = lon;
    if(i % 2) {
      randLat = lat + i * 0.0033
    }
    else {
      randLon = lon + i * 0.0033
    }
    let crew = {
      crew_id: i,
      car_mark: carMarks[i - 1],
      car_model: carModel[i - 1],
      car_color: carColor[i - 1],
      car_number: carNumber[i - 1],
      driver_name: 'Деточкин',
      driver_phone: '123123',
      lat: randLat,
      lon: randLon,
      distance: 300 * i
    }
    crews.push(crew);
  }

  crews.sort((a,b) => {
    if(a.distance > b.distance) {
      return 1;
    }
    if(a.distance < b.distance) {
      return -1;
    }
    return 0
  })
  const responseObj = {
    code: 0,
    descr: "OK",
    data: {
      crews_info: [...crews]
    }
  }

  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(responseObj)
    },1000)
  })
}

export const generateResponseOrder = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(
        {
          code: 0,
          descr: 'OK',
          data: {
            order_id: Math.random().toString(16).slice(2)
          }
        }
      )
    },1000)
  })
}