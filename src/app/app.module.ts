import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Формы
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

//Модальные окна
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';

//HTTP запросы
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Компоненты
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainHeadComponent } from './main-head/main-head.component';
import { ProjectsComponent } from './projects/projects.component';
import { PricesComponent } from './prices/prices.component';
import { SaleSetsComponent } from './sale-sets/sale-sets.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AboutBodyComponent } from './about-body/about-body.component';
import { TeamComponent } from './team/team.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { JobsComponent } from './jobs/jobs.component';
import { MateInfoComponent } from './mate-info/mate-info.component';
import { SaleSetsMainComponent } from './sale-sets-main/sale-sets-main.component';
import { ProcessComponent } from './process/process.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    FooterComponent,
    MainMenuComponent,
    HomePageComponent,
    MainHeadComponent,
    ProjectsComponent,
    PricesComponent,
    SaleSetsComponent,
    AboutComponent,
    ClientsComponent,
    ContactsComponent,
    MainAboutComponent,
    ApplicationFormComponent,
    AboutBodyComponent,
    TeamComponent,
    AdvantagesComponent,
    JobsComponent,
    MateInfoComponent,
    SaleSetsMainComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormBuilder, HttpClient, ModalService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
