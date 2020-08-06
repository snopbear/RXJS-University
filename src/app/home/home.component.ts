
import { Component, OnInit } from '@angular/core';
import { createHttpObservable } from '../common/util';
import { delayWhen, filter, map, take, timeout, tap, shareReplay, retryWhen } from 'rxjs/operators';
import { noop, Observable, timer } from 'rxjs';
import { Course } from '../model/course';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:typedef-whitespace
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  beginner: Course[];
  constructor() { }

  ngOnInit() {
    const http$ = createHttpObservable('http://localhost:3000/Courses');
    const courses$: Observable<Course[]> = http$
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map(res => res),
        shareReplay()
      );


    this.beginnerCourses$ = courses$
      .pipe(
        map(courses => courses
          .filter(course => course.category === 'BEGINNER'))
      );

    this.advancedCourses$ = courses$
      .pipe(
        map(courses => courses
          .filter(course => course.category === 'ADVANCED'))
      );

  }

}
