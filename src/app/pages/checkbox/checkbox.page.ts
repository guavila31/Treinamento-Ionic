import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  meses: any[] = [
    { mes: 'Janeiro', valor: 1, marcado: false },
    { mes: 'Fevereiro', valor: 2, marcado: true },
    { mes: 'Marco', valor: 3, marcado: true },
    { mes: 'Abril', valor: 4, marcado: false },
    { mes: 'Maio', valor: 5, marcado: false }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses)
  }
  exibirMes(){
    console.log(this.meses)
  }

}
