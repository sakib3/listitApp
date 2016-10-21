export class Company{
  id  : any;
  name : string;
  email : string;
  phone : number;
  address : string;
  password : string;
  confirmed : boolean;
  employees : Array<{ref : any}> = [];
  workplaces : Array<{w_id : any,name : string,city_name: string, address : string,post_code : number}> = [];
}
