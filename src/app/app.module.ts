import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import { DahiraComponent } from './dahira/dahira/dahira.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { CustomMaterialModule } from '../core/material.module';

const appRoutes: Routes = [
  { path: '', component: DahiraComponent, data: { title: 'dahira' } },
  { path: 'dahira', component: DahiraComponent, data: { title: 'dahira' } },
  { path: 'actualite', component: ActualiteComponent, data: { title: 'actualite' } }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DahiraComponent,
    ActualiteComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
