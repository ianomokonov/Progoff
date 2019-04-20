import { Client, Mate, Sale, NewApplication, Job } from './models';
import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadService } from './load.service';


@Injectable()
export class ClientService{
    
    baseUrl:string='http://client.nomokoiw.beget.tech/progoff/';
    clients:Client[];
    constructor(private http: HttpClient, private ls:LoadService ){
      this.ls.showLoad = true;
      this.getClients().subscribe(data => {
        this.clients = data;
        this.ls.showLoad = false;
      })
    }

    

    getClients(){
      
      return this.http.get<Client[]>(this.baseUrl + 'AppController.php?Key=get-clients');
    }

    getTeam(){
      this.ls.showLoad = true;
      console.log(this.ls)
      return this.http.get<Mate[]>(this.baseUrl + 'AppController.php?Key=get-team');
    }

    getJobs(){
      this.ls.showLoad = true;
      return this.http.get<Job[]>(this.baseUrl + 'AppController.php?Key=get-jobs');
    }

    getSales(){
      this.ls.showLoad = true;
      return this.http.get<Sale[]>(this.baseUrl + 'AppController.php?Key=get-sales');
    }

    addApp(app:NewApplication){
      this.ls.showLoad = true;
      return this.http.post(this.baseUrl + 'AppController.php?Key=add-app', app);
    }

    
}



