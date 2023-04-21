import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async abriAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Alert Subtitulo',
      message: 'Exemplo Alert',
      buttons: ['OK']
    })
    alert.present()
  }

  async abriAlertMultiploBotoes() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Alert Subtitulo',
      message: 'Exemplo Alert',
      buttons: ['Cancelar', 'Abrir', 'Excluir']
    })
    alert.present()
  }

  async abriAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Alert Confirm',
      message: 'Exemplo <strong>Alert Confirm</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: (e) => {
            console.log('Cancelar')
          }
        },
        {
          text: 'Okay',
          cssClass: 'success',
          handler: (e) => {
            console.log('Confirmar')
          }
        }
      ]
    })
    alert.present()
  }
  async abriAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt',
      subHeader: 'Alert Prompt Subtitulo',
      message: 'Prompt!!!',
      inputs: [
        {
        name:'Email',
        type:'text',
        placeholder:'Informe seu email'
      },
        {
        name:'senha',
        type:'password',
        id:'text-id',
        placeholder:'Informe sua senha'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'danger',
        handler: (e) => {
          console.log('Cancelar')
        }
      },
      {
        text: 'Okay',
        cssClass: 'success',
        handler: (form) => {
          console.log('formulario: ', form)
        }
      }
    ]
    })
    alert.present()
  }
}
