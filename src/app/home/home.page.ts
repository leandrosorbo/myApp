import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public questions = [
    {
      text: "Qual seu gênero favorito?",
      options: ["RPG", "FPS", "Plataforma", "MOBA"],
      selectedOption: null,
    },
    {
      text: "Qual sua desenvolvedora favorita?",
      options: ["Nintendo", "EA", "Ubisoft", "Valve"],
      selectedOption: null,
    },
    {
      text: "Onde você gosta de jogar?",
      options: ["Portátil", "Console", "Mobile", "PC"],
      selectedOption: null,
    }
  ];

  public currentQuestion = 0;
  public isDone = false;

  public mostVoted = null;
  public possibleResults = [
    {name: "Zelda", image: "https://img.elo7.com.br/product/zoom/2783337/big-poster-zelda-breath-of-the-wild-lo01-tamanho-90x60-cm-nerd.jpg"},
    {name: "Battlefield", image: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/bf4-keyart.jpg.adapt.crop191x100.628p.jpg"},
    {name: "Rayman", image: "https://ubistatic19-a.akamaihd.net/ubicomstatic/pt-br/global/search-thumbnail/ubicom-rayman_mini-search_thumbnail_mobile_356875.jpg"},
    {name: "DOTA", image: "https://www.pichauarena.com.br/wp-content/uploads/2020/01/dota_heroes.png"}
  ];

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
    ) {}

  public next() {
    if(this.currentQuestion === this.questions.length - 1){
      this.done();
    } else{
      this.currentQuestion++;
      this.showToast();
    }    
  }

  private async showToast(){
    const toast = await this.toastController.create({
      header: this.currentQuestion + " de " + this.questions.length + " respondidas ",
      duration: 500
    });
    toast.present();
  }
  public done(){
    this.isDone = true;
    const voteCount = [0, 0, 0, 0]
    this.questions.forEach(q => voteCount[q.selectedOption]++);
    const max = Math.max(...voteCount);
    this.mostVoted = voteCount.findIndex(v => v === max);
  }

  public async confirmReset(){
    const alert = await this.alertController.create({
      header: "Tem certeza?",
      message: "O seu resultado atual será perdido!",
      buttons: [
        "Cancelar",
        {
          text: "Jogar de novo",
          handler: () => this.reset()
        }        
      ]
    });
    alert.present();

  }

  private reset() {
    this.currentQuestion = 0;
    this.isDone = false;
    this.questions.forEach(q => q.selectedOption = null);
  }

}
