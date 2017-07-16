import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';

  mailArray: Array<any>= [
        {
            email: "BILL@gates.com",
            importance: true,
            subject: "New Windows",
            content: "Windows XI will launch in year 2100",
        },
        {
            email: "ADA@lovelace.com",
            importance: true,
            subject: "Programming",
            content: "Enchantress of numbers",
        },
        {
            email: "JOHN@carmac.com",
            importance: false,
            subject: "Updated Algo",
            content: "New algorithm for shadow volumes",
        },
        {
            email: "GOBE@newel.com",
            importance: false,
            subject: "HL3!",
            content: "Just Kidding...",
        },
    ]
}
