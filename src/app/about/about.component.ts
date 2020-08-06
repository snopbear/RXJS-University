import { Component, OnInit } from '@angular/core';
import { createHttpObservable } from '../common/util';
import { delayWhen, filter, map, take, timeout } from 'rxjs/operators';
import { noop } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const http$ = createHttpObservable('http://localhost:3000/Courses');
    const courses$ = http$.pipe(map(res => res));

    courses$.subscribe(arg => console.log(arg), noop, () => console.log('Complete'));
  }

}
