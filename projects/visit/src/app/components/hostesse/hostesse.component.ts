
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-hostesse',
  standalone: true,
  imports: [SharedModuleModule, RouterModule],
  templateUrl: './hostesse.component.html',
  styleUrl: './hostesse.component.css'
})
export class HostesseComponent {
  @ViewChild(MatSidenav)
  
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;
  logoSrc: string = 'assets/logo.png';

  constructor(private observer: BreakpointObserver) {
    
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
