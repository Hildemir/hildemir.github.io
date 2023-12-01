import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IgxCarouselModule } from 'igniteui-angular';

@Component({
  selector: 'clarifion-header',
  standalone: true,
  imports: [CommonModule, IgxCarouselModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  public slides = [
    { src: '../assets/fluent_checkmark-starburst-20-regular.svg', text:'30-DAY SATISFACTION GUARANTEE' },
    { src: '../assets/ph_truck-light.svg', text:'Free delivery on orders over $40.00' },
    { src: '../assets/mdi_cards-heart-outline.svg', text:'50.000+ HAPPY CUSTOMERS' },
    { src: '../assets/fluent_arrow-sync-checkmark-20-regular.svg', text:'100% Money Back Guarantee' }
];
}
