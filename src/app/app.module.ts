import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule,} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { OurApproachComponent } from './our-approach/our-approach.component';
import { OurBusinessesComponent } from './our-businesses/our-businesses.component';
import { OurreachComponent } from './ourreach/ourreach.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { OurComponent } from './our/our.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoweareComponent,
    OurApproachComponent,
    OurBusinessesComponent,
    OurreachComponent,
    ContactComponent,
    MediaComponent,
    OurComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
