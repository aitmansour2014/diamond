import { Component } from '@angular/core';
import { HostesseComponent } from '../hostesse/hostesse.component';

@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [HostesseComponent],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

}
