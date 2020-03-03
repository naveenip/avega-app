import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  styleUrls: ['./user-creation-form.component.scss']
})
export class UserCreationFormComponent implements OnInit {

  userCreateForm;

  constructor(private formBuilder:FormBuilder) {
    this.userCreateForm = this.formBuilder.group({
      name:'',
      empId:'',
      role:'',
      emailId:'',
      phNum:'',
      pwd:'',
      cnfPwd:''
    });
   }

  ngOnInit() {
  }

  onUserFormSubmit(user){
    console.debug(user.name);
  }

}
