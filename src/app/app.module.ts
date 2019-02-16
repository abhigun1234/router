import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {RouterModule} from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent}
    ,{path:'about',component:AboutusComponent},
    {path:'contact',component:ContactusComponent},
    {path:'**',component:PagenotfoundComponent}
     
  ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
