import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ServiceService {

  constructor(private http: Http) { }

    getUser(username) {
        if (username) {
            return this.http.get(`https://api.github.com/users/${username}`).map(data => data.json() ).toPromise();
        }
    }
}
