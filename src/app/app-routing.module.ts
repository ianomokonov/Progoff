import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { PricesComponent } from './prices/prices.component';
import { SaleSetsComponent } from './sale-sets/sale-sets.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ClientComponent } from './client/client.component';
import { TeamComponent } from './team/team.component';
import { JobsComponent } from './jobs/jobs.component';
import { AdvantagesComponent } from './advantages/advantages.component';

const aboutRouts: Routes = [
  { path: '', component: TeamComponent, pathMatch: 'full'},
  { path: 'jobs', component: JobsComponent},
  { path: 'advantages', component: AdvantagesComponent},
  
]

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, children: aboutRouts},
  { path: 'clients', component: ClientsComponent},
  { path: 'prices', component: PricesComponent},
  { path: 'sale-sets', component: SaleSetsComponent},
  { path: 'client/:id', component: ClientComponent },
  //{ path: 'contacts', component: ContactsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
