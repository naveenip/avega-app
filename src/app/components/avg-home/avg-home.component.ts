import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-avg-home',
  templateUrl: './avg-home.component.html',
  styleUrls: ['./avg-home.component.scss']
})
export class AvgHomeComponent implements OnInit {
  myform;

  constructor(private formBuilder:FormBuilder) {
    this.myform = this.formBuilder.group({
      firstname:''
    });
   }

  ngOnInit() {
  }

}
