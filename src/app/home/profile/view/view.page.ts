import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/components/photo-card/photo-card.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public photo: Photo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.photo = {
    id: +this.route.snapshot.paramMap.get('id'),
    liked: true,
    description: 'Ser ou não ser eis a questão.',
    comment_count: 44,
    place: 'São Paulo, SP',
    user: {
      id: 95,
      name: 'Leandro'
    }
  };
}
}