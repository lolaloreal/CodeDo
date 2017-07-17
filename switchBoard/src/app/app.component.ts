import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switchboard';
  switches = [false, false, false, false, false, false, false, false, false, false];

  currSwitch(idx) {
      this.switches[idx] = !this.switches[idx];
    }
}
