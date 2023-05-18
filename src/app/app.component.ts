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


  selectedOption: string;

  onOptionSelected(eve: any){
    this.selectedOption = eve;
    console.log(this.selectedOption);
  }


  data: TreeNode[] = [
    {
      label: 'Cards',
      icon : "folder",
      expanded : false,
      children: [
        { label: 'Card 1' ,
        children: [
          { label: 'Child 1' , icon: "account_tree"},
          { label: 'Click Me',
            children: [
              { label: 'Child 1' , icon: "account_tree"},
              { label: 'Child 2' ,action: () =>{ alert("hello")},
                children: [
                  { label: 'Child 1' , icon: "account_tree" ,
                  children: [
                    { label: 'Child 1' , icon: "account_tree"},
                    { label: 'Child 2' ,action: () =>{ alert("hello")},
                      children: [
                        { label: 'Child 1' , icon: "account_tree"},
                        { label: 'Child 2' , icon: "account_tree"},
                        { label: 'Child 3' , icon: "account_tree"}
                      ]
                    },
                    { label: 'Child 3' , icon: "account_tree"}
                  ]},
                  { label: 'Child 2' , icon: "account_tree"},
                  { label: 'Child 3' , icon: "account_tree"}
                ]
              },
              { label: 'Child 3' , icon: "account_tree"}
            ]
          },
          { label: 'Child 3' , icon: "account_tree"}
        ]
        },
        { label: 'Child 2' , icon: "folder_open"},
        { label: 'Child 3' , icon: "folder_open"}
      ]
    },
  ];

  data2: TreeNode[] = [
    {
      label: 'Dialogs',
      icon : "folder",
      expanded : true,
      children: [
        { label: 'Card 1' ,
        children: [
          { label: 'Child 1' , icon: "account_tree"},
          { label: 'Click Me',
            children: [
              { label: 'Child 1' , icon: "account_tree"},
              { label: 'Child 2' ,action: () =>{ alert("hello")},
                children: [
                  { label: 'Child 1' , icon: "account_tree"},
                  { label: 'Child 2' , icon: "account_tree"},
                  { label: 'Child 3' , icon: "account_tree"}
                ]
              },
              { label: 'Child 3' , icon: "account_tree"}
            ]
          },
          { label: 'Child 3' , icon: "account_tree"}
        ]
        },
        { label: 'Child 2' , icon: "folder_open"},
        { label: 'Child 3' , icon: "folder_open"}
      ]
    },
  ];
}
