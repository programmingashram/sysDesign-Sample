import { Component } from '@angular/core';


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

}
