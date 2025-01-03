import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  user = { name: 'Saumya Singh', email: 'saumya.singh@gmail.com'};

  updateForm: FormGroup;

  constructor() {
    this.updateForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email])
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.user = this.updateForm.value;
    alert("User Details Updated Successfully !");
  }

}
