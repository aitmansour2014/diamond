import { Component } from '@angular/core';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {

}