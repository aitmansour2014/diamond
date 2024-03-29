import { Component } from '@angular/core';
import { DeskNavComponent } from '../Navbar/desk-nav/desk-nav.component';

@Component({
  selector: 'app-front-template',
  standalone: true,
  imports: [DeskNavComponent],
  templateUrl: './front-template.component.html',
  styleUrl: './front-template.component.css'
})
export class FrontTemplateComponent {

}
