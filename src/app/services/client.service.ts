import { Client, Mate, Sale, NewApplication, Job, Price } from './models';
import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadService } from './load.service';


@Injectable()
export class ClientService{
    makets = [];
    baseUrl:string='http://progoff.ru/progoff/';
    constructor(private http: HttpClient, private ls:LoadService ){
    }

    

    getClients(){
      return this.http.get<Client[]>(this.baseUrl + 'AppController.php?Key=get-clients');
    }

    getClient(id){
      return this.http.get<Client>(this.baseUrl + 'AppController.php?Key=get-client&Id='+id);
    }

    getMaket(id){
      return this.http.get<any>(this.baseUrl + 'AppController.php?Key=get-maket&Id='+id);
    }

    getTeam(){
      return this.http.get<Mate[]>(this.baseUrl + 'AppController.php?Key=get-team');
    }

    getJobs(){
      return this.http.get<Job[]>(this.baseUrl + 'AppController.php?Key=get-jobs');
    }

    getMakets(){
      return this.http.get<Job[]>(this.baseUrl + 'AppController.php?Key=get-makets');
    }

    getSales(){
      return this.http.get<Sale[]>(this.baseUrl + 'AppController.php?Key=get-sales');
    }

    getPrices(){
      return this.http.get<Price[]>(this.baseUrl + 'AppController.php?Key=get-prices');
    }

    addApp(app:NewApplication){
      return this.http.post(this.baseUrl + 'AppController.php?Key=add-app', app);
    }

    
}



