import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public users;

  constructor(private http: HttpClient) {
    this.makeRequest();
  }

  public async makeRequest() {
    this.users = await this.http.get('http://jsonplaceholder.typicode.com/users').toPromise()
  }

}
