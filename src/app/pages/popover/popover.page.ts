import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalInternoComponent } from 'src/app/components/modal-interno/modal-interno.component';
import { PopoverInternoComponent } from 'src/app/components/popover-interno/popover-interno.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }
  async abrir(e?: any){
    const popover = await this.popoverCtrl.create({
      component: PopoverInternoComponent,
      translucent: true
    });

    return await popover.present()
  }
}
