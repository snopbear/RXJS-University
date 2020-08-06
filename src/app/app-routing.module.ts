import { AboutModule } from './about/about.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { CourseModule } from './course/course.module';


const routes: Routes = [
   { path: '', loadChildren: 'app/home/home.module#HomeModule'},
   { path: 'courses', loadChildren: 'app/course/course.module#CourseModule'}

];

@NgModule({
  imports: [
    HomeModule,
    AboutModule,
    CourseModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
