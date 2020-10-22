import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Car {
  name: string;
  img: any;
  info: string;
  km: string;
  desconto: string;
  detalhes: string;
  valor: string;
};

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.page.html',
  styleUrls: ['./fleet.page.scss'],
})
export class FleetPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  //cria o objeto car
public cars: Car[] = [
  {
    name: 'GRUPO A - CLICK CAR',
    img: 'https://www.autossegredos.com.br/wp-content/uploads/2020/04/fiat-mobi-easy-1280x720.jpg', 
    info: 'Mobi Like ou Similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 2 Malas',
    valor:'R$ 97,00' //colocar código de valor
  },
  {
    name: 'GRUPO B - ECONÔMICO',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYLatEMC2MG8kWNV6J45BYjBaTjh21yOgW_g&usqp=CAU', 
    info: 'Onix, Uno, Sandero ou similar Like ou Similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 3 Malas',
    valor:'R$ 104,00'
  },
  {
    name: 'GRUPO C - ECÔNOMICO SEDAN',
    img: 'data:image/jpeg;base64,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', 
    info: 'Logan, Prisma, Onix Plus ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 3 Malas',
    valor:'R$ 110,00'
  },
  {
    name: 'GRUPO D - ECÔNOMICO PLUS',
    img: 'https://www.consorciodeautos.com.br/wp-content/plugins/ns_tabelafixa/imagensproduto/89-nm_produto12-01-2017-14-57-10-prF.png', 
    info: 'HB20 S ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 3 Malas',
    valor:'R$ 102,00'
  },
  {
    name: 'GRUPO E - COMPACTO',
    img: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/colorizer/1-onix-premier-branco-summit.jpg?imwidth=960', 
    info: 'Gol, Onix, Sandero, HB20 ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 3 Malas',
    valor:'R$ 107,00'
  },
  {
    name: 'GRUPO F - HATCH AUTOMÁTICO',
    img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/vw-polo-highline-2021.jpg?quality=70&strip=info', 
    info: 'Polo, HB20 ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 3 Malas',
    valor:'R$ 121,00'
  },
  {
    name: 'GRUPO G - SEDAN COMPACTO S',
    img: 'https://4.bp.blogspot.com/-tFyAUVnx-Qo/VTFsb_sPn6I/AAAAAAACGEw/1k2vSfULa_Y/s1600/VW-Voyage-2016-Evidence.jpg', 
    info: 'Voyage, Logan ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 4 Malas',
    valor:'R$ 115,00'
  },
  {
    name: 'GRUPO H - SEDAN AUTOMÁTICO',
    img: 'https://www.litoralcar.com.br/foto-resize/g/806252/31/chevrolet-onix-sedan-plus-turbo-lt--2020-9752111.jpg', 
    info: 'Onix, HB20 S ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 4 Malas',
    valor:'R$ 130,00'
  },
  {
    name: 'GRUPO I - SUV AUTOMÁTICA',
    img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/07/Renegade_Moab_002-large-e1596229407148.jpeg?quality=70&strip=info', 
    info: 'Creta, Renegade, T-cross ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 5 Malas',
    valor:'R$ 145,00'
  },
  {
    name: 'GRUPO J - SUV ESPECIAL',
    img: 'https://s2.glbimg.com/7lMJLzC9w2nPJ2FEDhwqxL1gUTg=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/08/03/jeep_compass_s_1.jpeg', 
    info: 'Jeep Compass 2.0, Creta 2.0, Captur 2.0 ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 4 Malas',
    valor:'R$ 269,00'
  },
  {
    name: 'GRUPO K - MINIVAN AUTOMÁTICA',
    img: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2019-spin/colorizer/01-images/2019-spin-cinza-satin-steel.png?imwidth=960', 
    info: 'Spin ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '7 Pessoas - Ar Condicionado - Mecanico - ABS - 2 Malas',
    valor:'R$ 160,00'
  },
  {
    name: 'GRUPO L - MINI PICK-UP',
    img: 'data:image/jpeg;base64,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UxAIzbjobdBU4G09TUMjo7MMkjmRGQXzzkkMja43ta9tQOckoN18EFOW4YxxFjJJPL2h0rgCe4BTRWWCYeKenigBvxcbWX6S0WJ7zcq9RBERAREQah4YtmsPqC6oFXBBWNFi18jWtly7g8bw8DQO7Aea2gnst/LUeK7Xmp2O85jXes0H3qxm2epH+dSwHtij+CK40sriiiY57WyP4tpIDnlpdlHTlbqewLreXYrDnedQUx/6TPgrWTg6wo76CHuBHuKCEbI7d4HhtOIIJJXnzpH8S8OkfbVxvbTmA5h4rIz8OOGjzWVDuxjR73LOv4LMIP8AgmjsfKP41SPBNg/zP/dn/GiIzLw90nyaSc9pjH3lWU3D8z5FC76UoHuaph+SHB/mh+2n/GvPyQYP81d9tN+NBApeH6X5NDGPWlcfc0Kxn4eK4+ZT0ze0SO/jC2V+R/CPmzvtpvxJ+R/CPmzvtpvxINUy8OGJncKdvZE773lWU3DFizt07G+rEz7wVuP8j+EfNnfbTfiQcEGEfNXfbTfjQaHxPhExOeN8UtW50bwWvZljALTvGjQorZdVM4KcIAt5EO+SYnxzrw8FGEfMh9rN+NFcu0s5YeorMUu0EjNWSvZ6pIJ7bHVdGM4K8IH+Cb3yTH3vVxBwb4UzdQRH1sz/AN4lBy/VYkXkuc4vcflPNz7dSrWOlkeeSxzvVaXe4Lr+l2aoo/0dJA3siZ8Fko4Gt81rR2AD3IOPabZWtk8yjqHdkMlvG1lmKXgxxV+6hkHrljf3nLq668Qcz0/Atirt8cTPWlb/AA3WVp+AetPn1EDezO77gug0RGi4eACT5dewerE4+9wWQg4Aofl1sh9WNo95K3IiDVMPAPQDzqipPYYh/AVct4DcN/WVX2jP+2tmog1ieAzDf1lV9pH/ANtZnZrguw+ilbPG2R8rDdj5X3ym1rhrQ1vOeZTVEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==', 
    info: 'Strada, Saveiro ou similar',
    km: 'KM Livre',
    desconto: 'Desconto Pré Agendamento',
    detalhes: '2 Pessoas - Ar Condicionado - Mecanico - ABS - 0 Mala',
    valor:'R$ 189,00'
  },
];

//implementação do alertcontroller

public async presentAlert(car) {
  const alert = await this.alertController.create({
    header: '' +car.name+ '',
    message: '<strong>Informação:</strong> <p>' + car.info + '</p>' +
    '<li>  '+ car.km +' </li>' +
    '<li> '+ car.desconto +' </li>' +
    '<p><strong>Destalhes:</strong></p> <p>'+ car.detalhes +'</p>'+
    '<p> Valor:'+ car.valor + '</p>',
    buttons: ['OK']
  });

  await alert.present();
}

}