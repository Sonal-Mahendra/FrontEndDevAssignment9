import { Component, OnInit } from '@angular/core';
import {FormserviceService} from '../formservice.service'
import { Course } from './../course';
import{ DropdownService} from '../dropdown.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[FormserviceService,DropdownService]
})
export class FormComponent implements OnInit {

  constructor(private _dropDownService: DropdownService) { }

  dropdownList = [];
  selectedItems = [];
  
  selectedCourses:any;
  course: Course[] = [];
 

  ngOnInit() {
    this.course=this._dropDownService.getCourse();
    
    this.dropdownList = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"},
      {"id":6,"itemName":"Germany"},
      {"id":7,"itemName":"France"},
      {"id":8,"itemName":"Russia"},
      {"id":9,"itemName":"Italy"},
      {"id":10,"itemName":"Sweden"}
    ];
this.selectedItems = [
        {"id":2,"itemName":"Singapore"},
        {"id":3,"itemName":"Australia"},
        {"id":4,"itemName":"Canada"},
        {"id":5,"itemName":"South Korea"}
    ];
           
}
onItemSelect(item:any){
console.log(item);
console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
console.log(item);
console.log(this.selectedItems);
}
onSelectAll(items: any){
console.log(items);
}
onDeSelectAll(items: any){
console.log(items);
}
  
  handleSubmit(e,form){
    e.preventDefault();
    console.log(form);
  }

}
