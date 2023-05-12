import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TreeNode } from 'sysdesign2023';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sys-design';
    small : boolean = true;
    menu(){
      this.small = !this.small;
    }

      data: TreeNode[] = [
    {
      label: 'Parent 1',
      children: [
        { label: 'Child 1' , icon: "home"},
        { label: 'Child 2' , icon: "home"},
        { label: 'Child 3' , icon: "home"}
      ]
    },
    {
      label: 'Parent 2',
      children: [
        { label: 'Child 1' , icon: "home"},
        { label: 'Child 2' , icon: "home"},
        { label: 'Child 3' , icon: "home"}
      ]
    },
  ];


  myForm: FormGroup;
  constructor() { }


  ngOnInit(){
    this.myForm = new FormGroup({
      test : new FormControl(),
    });



  }
  myThemeChange(){
    console.log(this.myForm.getRawValue().test);
    let body = document.querySelector('body');
    body?.classList.toggle(`${this.myForm.getRawValue().test}`);
  }

}
