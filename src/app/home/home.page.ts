import { Component } from '@angular/core';
import { ConfirmationService } from '../services/confirmation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private confirmationService: ConfirmationService) {
  }
 
  showConfirmation() {
    this.confirmationService.show(() => console.log("confirmado! vai fundo!"));
  }

}
