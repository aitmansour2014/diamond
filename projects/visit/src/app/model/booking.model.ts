import { Hostess } from "./hostess.model"
import { ListHostessBooking } from "./listHostessBooking.model"
import { Messages } from "./messages.model"

export interface Activities {
  id: number
  idClient : number
  subject: string
  cities: string[]
  hostesses: ListHostessBooking[]
  backupHostesses: ListHostessBooking[]
  listMessages: Messages[]
  dateStart: string
  dateEnd: string
  periodHours: number
  field: string 
  statue :string
  chefHostesseId?: number // (if list hostesse >9)
  
  
}