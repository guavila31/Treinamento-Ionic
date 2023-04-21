import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infine-scroll',
  templateUrl: './infine-scroll.page.html',
  styleUrls: ['./infine-scroll.page.scss'],
})
export class InfineScrollPage implements OnInit {

  numeros = [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  limite= 10
  constructor() { }

  ngOnInit() {
  }

  popularInifnite(infiniteScrollEvent: any){
    console.log('Carregar mais 10')
    this.limite+=10
    infiniteScrollEvent.target.complete()
  }
}
