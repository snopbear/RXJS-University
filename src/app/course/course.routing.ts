import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from '../course/course.component';

const routes: Routes = [
  { path: 'courses', component: CourseComponent },
  { path: 'courses/:id', component: CourseComponent }
];

export const CourseRoutes = RouterModule.forChild(routes);
