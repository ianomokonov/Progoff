
export class IdNameDescription{
  Id:number;
  Name:string;
  Description:string;
}

export class Application extends IdNameDescription{
  Email:string;
  CreateDate:Date;
}



export class Client extends IdNameDescription{
  MainImage:string;
  LeftImage:string;
  RightImage:string;
  Link:string;
  Model?:string;
  Logo?:string;
  CreateDate?:Date;
  LongDescription?:string;
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
  Image:string;
  Requirements:Requirement[];
}

export class Service extends IdNameDescription{
  Price:number;
}

export class Attachment{
  /**
   * Идентификатор набора услуг/ вакансии
   */
  Id:number;

  /**
   * Идентификатор заявки
   */
  AppId:number;
  Type:AttachmentType;

  Content:any;
}

export class Requirement{
  Id:number;
  Description:string;
}

export enum AttachmentType{
  SaleSet = 'sale-set',
  Job = 'job'
}
