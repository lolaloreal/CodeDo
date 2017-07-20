import { Component } from '@angular/core';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';
  userExists = null;
  username = null;
  score = null;
  promise;

  constructor(private serviceService: ServiceService) { }

  calculate(){
     this.promise = this.serviceService.getUser(this.username)
     if (this.promise){
         this.promise.then( (user) => {
             if(user.id){
                 this.userExists = true;
                 this.score = user.public_repos + user.followers;
             } else {
                 this.userExists = false;
             }
             this.username = null;
             console.log(this.username)
        })
        .catch((err) => {
            this.userExists = false;
        });
    } else {
        this.userExists = false;
    }
 }

}
