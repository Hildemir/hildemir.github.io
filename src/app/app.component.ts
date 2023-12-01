import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IgxCarouselModule } from 'igniteui-angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { CustomerCommentComponent } from './customer-comment/customer-comment.component';
import { ShippingInformationComponent } from './shipping-information/shipping-information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    IgxCarouselModule, 
    MatIconModule, 
    HeaderComponent, 
    FooterComponent,
    OrderStatusComponent,
    CustomerCommentComponent,
    ShippingInformationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Ejam-project';
}
