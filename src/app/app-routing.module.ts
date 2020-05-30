import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutComponent } from "./about/about.component";
import { ClientsComponent } from "./clients/clients.component";
import { PricesComponent } from "./prices/prices.component";
import { SaleSetsComponent } from "./sale-sets/sale-sets.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ClientComponent } from "./client/client.component";
import { TeamComponent } from "./team/team.component";
import { JobsComponent } from "./jobs/jobs.component";
import { AdvantagesComponent } from "./advantages/advantages.component";
import { PolicyComponent } from "./policy/policy.component";
import { ExamplesComponent } from "./examples/examples.component";
import { ExampleComponent } from "./example/example.component";

const aboutRouts: Routes = [
  { path: "", component: TeamComponent, pathMatch: "full" },
  { path: "jobs", component: JobsComponent },
  { path: "advantages", component: AdvantagesComponent },
];

const routes: Routes = [
  { path: "", component: HomePageComponent, pathMatch: "full" },
  {
    path: "about",
    component: AboutComponent,
    children: aboutRouts,
    data: {
      title: "О компании Progoff",
      description:
        "Компания занимается разработкой и продвижением сайтов / интернет магазинов любой сложности.",
    },
  },
  {
    path: "clients",
    component: ClientsComponent,
    data: {
      title: "Клиенты компании Progoff",
      description:
        "За несколько лет существования на рынке, мы стали опытными разработчика в сфере создания сайтов, что позоваляет нам обслуживать как частных предпринимателей, так и крупный бюджетные организации.",
    },
  },
  {
    path: "prices",
    component: PricesComponent,
    data: {
      title: "Цены продуктов компании Progoff",
      description:
        "Компания Progoff предоставлет оптимальные по соотношению цена / качество услуги, которые включаю в себя разработку сайтов любой сложности, создание уникального дизайна и стиля сайта, продвижение сайтов.",
    },
  },
  {
    path: "sale-sets",
    component: SaleSetsComponent,
    data: {
      title: "Пакеты услуг",
      description:
        "Progoff найдет подход к любому клиенту. Для тех, кто хочет много и недорого, мы готовы предложить уже сформированные пакеты по сниженным ценам. Если Вы не нашли среди наших услуг то, что Вас интересует, напишите нам, и мы с радостью предложим несколько оригинальных решений.",
    },
  },
  { path: "client/:id", component: ClientComponent },
  { path: "policy", component: PolicyComponent },
  {
    path: "examples",
    component: ExamplesComponent,
    data: {
      title: "Примеры разработки работ для разработки сайта по макету",
      description:
        "Мы понимаем, как порой сложно определиться с макетом будущего сайта. Возможности нашей команды в плане верстки сайтов безграничны, поэтому предлагаем вам подборку готовых макетов для вдохновения. Быть может один из них послужит основой для вашего нового шедевра.",
    },
  },
  { path: "example/:id", component: ExampleComponent },
  //{ path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
