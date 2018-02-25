import { Injectable } from '@angular/core';
import { Course } from './course';
@Injectable()
export class DropdownService {

  courseList:Course[] = [];
 

  constructor() { }
  getCourse(){
    
    return this.courseList = [
      {
        courseList: 'Angular'
      },      
      {
        courseList: 'MongoDB '
      },
      {
        courseList:'nodejs'
      },
      {
        courseList: 'Javascript '
      },
    ];
  }

}
