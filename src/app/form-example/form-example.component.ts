import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {
  myForm: FormGroup;
  constructor() { }

  radio1 = new FormControl();
  radio2 = new FormControl();
  test = new FormControl();
  ngOnInit(){
    this.myForm = new FormGroup({
      radio1 : new FormControl({}),
      radio2 : new FormControl(''),
      test : new FormControl(),
    });
  }
  onSubmit() {
    alert(this.myForm.getRawValue().test);
  }

  selectedOption: string;

  onOptionSelected(eve: any){
    this.selectedOption = eve;
    console.log(this.selectedOption);
  }

}
