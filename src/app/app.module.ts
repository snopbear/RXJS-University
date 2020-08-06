import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { CourseModule } from './course/course.module';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      SidenavListComponent
   ],
   imports: [
      BrowserModule,
       AppRoutingModule,
      FlexLayoutModule,
      BrowserAnimationsModule,
      MaterialModule,
      AboutModule,
      HomeModule, CourseModule
   ],
   providers: [],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
