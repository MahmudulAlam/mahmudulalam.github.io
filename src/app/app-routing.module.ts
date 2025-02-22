import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "", component: HomeComponent}, 
  {path: "home", component: HomeComponent}, 
  {path: "research", component: ResearchComponent},
  {path: "publications", component: PublicationsComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", component: HomeComponent, pathMatch: "full"}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], 
  exports: [RouterModule]
})

export class AppRoutingModule { }
