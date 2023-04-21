import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.page.html',
  styleUrls: ['./botoes.page.scss'],
})
export class BotoesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  voltarParaHome() {
    this.navCtrl.navigateForward('home')
  }
}
