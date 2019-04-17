
export class IdNameDescription{
  Id:number;
  Name:string;
  Description:string;
}

export class Application extends IdNameDescription{
  Email:string;
  AttachmentId:number;
  AttachmentType:AttachmentType;
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
  Requirements:string[];
}

export class Service extends IdNameDescription{
  Price:number;
}

export class Attachment{
  /**
   * Идентификатор набора услуг
   */
  Id:number;

  /**
   * Идентификатор заявки
   */
  ApplicationId:number;
  Type:AttachmentType;

  Content:any;
}

export enum AttachmentType{
  SaleSet = 'sale-set',
  Job = 'job'
}
