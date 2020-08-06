import { AboutRoutes } from './about.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
@NgModule({
  imports: [
    CommonModule,
    AboutRoutes
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
