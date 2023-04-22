import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { start } from 'repl';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async toastSimples() {
    let toast = await this.toastCtrl.create({
      message: 'Ola mundo!!!',
      duration: 2000
    })
    toast.present();
  }

  async toastOpcoes() {
    let toast = await this.toastCtrl.create({
      header: 'Toast Header',
      message: 'Ola mundo!!!',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favoritos',
          handler: ()=> {
              console.log('Favoritou!')
          },
        },
        {
          text: 'Done',
          role: 'done',
          handler: ()=> {
              console.log('Concluido!')
          },
        }
      ]
    })
    toast.present();
  }
}
