import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){console.log("Comecou a interação com o Scroll")}
  logScrolling(e: any){console.log("Evento Scroll: ", e)}
  logScrollEnd(){console.log("Scroll Parou")}

}
