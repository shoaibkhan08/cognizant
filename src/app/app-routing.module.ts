import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagComponent } from './home-pag/home-pag.component';
import { SkillsComponent } from './skills/skills.component';
import { ActivitesComponent } from './activites/activites.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  {
    path:'', component:HomePagComponent
  },
  {
    path:'skills', component:SkillsComponent
  },
  {
    path:'activities', component:ActivitesComponent
  },
  {
    path:'education', component:EducationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
