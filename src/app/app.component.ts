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
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'construct' },
    { title: 'Badge', url: 'badge', icon: 'construct' },
    { title: 'Card', url: 'card', icon: 'card' },
    { title: 'Checkbox', url: 'checkbox', icon: 'construct' },
    { title: 'Chip', url: 'chip', icon: 'construct' },
    { title: 'Content', url: 'content', icon: 'construct' },
    { title: 'Date Time', url: 'date-time', icon: 'construct' },
    { title: 'Fab', url: 'fab', icon: 'construct' },
    { title: 'Grid', url: 'grid', icon: 'construct' },
    { title: 'Infinite Scroll', url: 'infine-scroll', icon: 'construct' },
    { title: 'Input', url: 'input', icon: 'construct' },
    { title: 'List', url: 'list', icon: 'construct' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
