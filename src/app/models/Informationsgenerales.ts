import {education} from "./education";
import{Certification} from "./certification"
import {Offre} from "./offre";
export interface Informationsgenerales{
  firstName:string,
  lastName:string,
  gender:string,
  birthday:string,
  email:string,
  country:string,
  city:string,
  password:string,
  phoneNumber:number,
  id:number;
  field:any;
  role:string;
  education?:education[];
  certification?:Certification[];
  offres?:Offre;
}
