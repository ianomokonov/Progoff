
export class IdNameDescription{
  Id:number;
  Name:string;
  Description:string;
}

export class Client extends IdNameDescription{
  MainImage:string;
  LeftImage:string;
  RightImage:string;
  Model?:string;
  CreateDate?:Date;
}

export class Sale extends IdNameDescription{
  Image:string;
  Discount:number;
  Services:Service[];
}

export class Mate extends IdNameDescription{
  Position:string;
  VK?:string;
  Instagram?:string;
}

export class Job extends IdNameDescription{
  Requirements:string[];
}

export class Service extends IdNameDescription{
  Price:number;
}