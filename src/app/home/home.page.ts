import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = "Leandro";

  public messageCount = 5;

  public user = {
    name: "Leandro",
    followers: 542,
    stars: 4.2
  }

  public follow(){
    this.user.followers++;
  }

  constructor() {}

}