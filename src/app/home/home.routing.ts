import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from '../course/course.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

export const HomeRoutes = RouterModule.forChild(routes);
