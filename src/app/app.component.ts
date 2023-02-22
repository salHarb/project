import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Shopify';
  subTitle: string = 'Where you find your needs and wants'
  favorite: boolean = true;
}
