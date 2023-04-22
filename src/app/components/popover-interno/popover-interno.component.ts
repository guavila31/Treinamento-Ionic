import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-interno',
  templateUrl: './popover-interno.component.html',
  styleUrls: ['./popover-interno.component.scss'],
})
export class PopoverInternoComponent implements OnInit {
  nome: string = ''
  constructor(private navParams: NavParams, private popoverCtrl: PopoverController) {
    this.nome = this.navParams.get("nome")
  }

  ngOnInit() { }

  fechar() {
    this.popoverCtrl.dismiss()
   }

}
