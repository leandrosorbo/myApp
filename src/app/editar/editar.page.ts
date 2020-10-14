import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
  }

}
