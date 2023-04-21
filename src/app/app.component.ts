import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: 'navegacao', icon: 'paper-plane' },
    { title: 'Botões', url: 'botoes', icon: 'construct' },
    { title: 'Alert', url: 'alert', icon: 'alert' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'actionsheet' },
    { title: 'Badge', url: 'badge', icon: 'badge' },
    { title: 'Card', url: 'card', icon: 'card' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
