import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';
import { ArtformspageComponent } from './pages/artformspage/artformspage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'', component:HomepageComponent
  },
  {
    path:'artforms', component:ArtformspageComponent
  },
{
  path:'contact', component:ContactpageComponent
},
{
  path:'signup',component:SignuppageComponent
},
{path:'single',component:SinglepageComponent},
{
  path:'login',component:LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
