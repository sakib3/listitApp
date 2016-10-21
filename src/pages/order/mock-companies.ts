import { Company } from './companyModel';

export const COMPANIES: Company[] = [
  {id: 1,name:'Ericson AB', email:'support@erikson.com', phone:123456, address: '91 Karlaplan', password:'123456', confirmed:true, employees: [], workplaces :[{w_id:1,name:'Stockholm Barkaberby',address:'Place 1',city_name:'Stockholm',post_code:123}]},
  {id: 2,name:'Tieto AB', email:'support@tieto.com', phone:123456, address: '56 Karlaplan', password:'123456', confirmed:true, employees: [], workplaces :[{w_id:2,name:'Stockholm KungsKurva',address:'Place 1',city_name:'Stockholm',post_code:123},{w_id:3,name:'Stockholm Stolentuna',address:'Place 1',city_name:'Stockholm',post_code:123}]},
  {id: 3,name:'SAAB AB', email:'support@saab.com', phone:123456, address: '56 Bridgevægen', password:'123456', confirmed:true, employees: [{ref:'employee'},{ ref:'employee'}], workplaces :[]}
];
