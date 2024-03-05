import { Component } from '@angular/core';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
