
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from '../course/course.component';
import { CourseRoutes } from './course.routing';
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        CourseRoutes,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [CourseComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseModule { }
