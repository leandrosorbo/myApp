import { Component } from '@angular/core';

type Transaction = {
  amount: number;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public selectedAmount = 0;
  public totalAmount = 0;
  public transactionLog: Transaction[] = [];

  public makeTransaction() {
    this.totalAmount += this.selectedAmount;
    this.transactionLog.unshift({
      amount: this.selectedAmount,
      date: new Date()
    })

    this.selectedAmount = 0;
  }

  constructor() {}

}
