import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';


@Component({
  selector: 'app-root',
  imports:[CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cart';
}
