import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  opcaoSelecionada: string=''
  constructor() { }

  ngOnInit() {
  }

  selecionar(e:any){
    console.log('Selecionado: ', e.target.value)

    this.opcaoSelecionada = e.target.value;
  }

}
