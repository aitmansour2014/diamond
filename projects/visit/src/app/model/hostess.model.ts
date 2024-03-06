import { Absences } from "./absences.model"
import { Comments } from "./comments.model"

export interface Hostess {
  id: number
  firstName: string
  lastName: string
  role:'HOSTESS'
  email: string
  phoneNumber: number
  gender: string
  dateOfBirth: string
  billingMethod: string
  mainLocation: string
  otherLocation: string[]
  ///info body
  bodySize: string
  shoeSize: string
  hairColor: string
  bodyMeasurements: string[]
  clothingSize: number
  //Language
  langauge: [{name: string, level: string}]
  bio:string
  listCommenter: Comments[]
  listPictures: string[]
  listAbsence: Absences[]
  validation: boolean

}