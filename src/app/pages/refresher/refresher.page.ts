import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  atualizar(e: any) {
    console.log('Solicitando atualizacao: ', e)
    setTimeout(()=>{
      console.log('Atualizado!!!')
      e.target.complete();
    },2000)
  }
}
