import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular--google-auth';

  model = {};
  steps: any =1;
  submit(){
    console.log(this.steps);
    this.steps = this.steps + 1;
  }
}


