import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
    power: number;

  constructor() { }

  ngOnInit() {
      this.power = 10;
  }

}
