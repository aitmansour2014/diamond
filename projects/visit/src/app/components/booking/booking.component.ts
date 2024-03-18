import { Component } from '@angular/core';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [SharedModuleModule, MatIconModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

stepOneSelected: boolean = true;
constructor(){}
firstNext(){
 
}
}
