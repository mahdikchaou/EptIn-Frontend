export interface Offre {
  country: string,
  city: string,
  authority: string,
  type: string,
  name: string,
  comment: string,
  email:string,
  phoneNumber:string,
  startDate:string,
  endDate?:string,
  field:string,
  id:number,
  Students:[]
}
