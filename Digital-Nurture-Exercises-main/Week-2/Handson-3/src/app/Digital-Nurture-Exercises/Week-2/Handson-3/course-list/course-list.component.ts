import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, HighlightDirective],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  isLoading: boolean = true;

  courses = [
    { id: 1, name: 'Angular', credits: 3, enrolled: true, gradeStatus: 'passed' },
    { id: 2, name: 'React', credits: 4, enrolled: false, gradeStatus: 'failed' },
    { id: 3, name: 'Vue', credits: null, enrolled: true, gradeStatus: 'pending' }
  ];

  ngOnInit(): void {
    console.log("ngOnInit called"); // debug

    setTimeout(() => {
      console.log("timeout done"); // debug
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }
}