import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reordenar(e: any) {
    console.log('Evento: ', e.details)
    console.log('Ordenado do index ', e.detail.from, ' até ', e.detail.to)
    e.detail.complete();
  }
}
