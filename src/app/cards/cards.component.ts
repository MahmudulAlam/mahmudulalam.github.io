import { Component, Input } from '@angular/core';
import { Publication } from '../models/publication';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  @Input() publication = {} as Publication;
}
