import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { OurApproachComponent } from './our-approach/our-approach.component';
import { OurBusinessesComponent } from './our-businesses/our-businesses.component';
import { OurreachComponent } from './ourreach/ourreach.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { OurComponent } from './our/our.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"",redirectTo :'home',pathMatch:"full"},
  {path:"home",component : HomeComponent},
  {path:"whoweare",component : WhoweareComponent},
  {path:"approach",component : OurApproachComponent},
  {path:"business",component : OurBusinessesComponent},
  {path:"ourreach",component : OurreachComponent},
  {path:"contact",component : ContactComponent},
  {path:"media",component :  MediaComponent },
  {path:"our",component :  OurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
