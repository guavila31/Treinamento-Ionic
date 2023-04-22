import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-interno',
  templateUrl: './modal-interno.component.html',
  styleUrls: ['./modal-interno.component.scss'],
})
export class ModalInternoComponent  implements OnInit {

  nome: string = ''
  constructor(private navParams: NavParams, private modalCtrl: ModalController) {
    this.nome = this.navParams.get("nome")
   }

  ngOnInit() {}

  fechar(){
    this.modalCtrl.dismiss()
  }
}
