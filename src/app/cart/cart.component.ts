import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RadioButtonModule ,CheckBoxModule} from "@syncfusion/ej2-angular-buttons";
import {  DropDownListModule} from "@syncfusion/ej2-angular-dropdowns";
import {  ButtonModule} from "@syncfusion/ej2-angular-buttons";
import { TextBoxModule, TextAreaModule,  MaskedTextBoxModule} from "@syncfusion/ej2-angular-inputs";


@Component({
  selector: 'app-cart',
  imports: [RadioButtonModule,TextBoxModule,  MaskedTextBoxModule,TextAreaModule,  ButtonModule,DropDownListModule,CheckBoxModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CartComponent {

}
