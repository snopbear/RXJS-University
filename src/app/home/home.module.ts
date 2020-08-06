
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../shared/material/material.module';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HomeRoutes,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [HomeComponent, CoursesCardListComponent, CourseDialogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
