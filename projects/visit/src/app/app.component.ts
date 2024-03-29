import { Component ,OnInit,HostListener, NgModule} from '@angular/core';
import { BecomeHostessComponent } from './components/become-hostess/become-hostess.component';
import { MobileNavComponent } from './components/Navbar/mobile-nav/mobile-nav.component';
import { DeskNavComponent } from './components/Navbar/desk-nav/desk-nav.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { NgIf } from '@angular/common';
import { HostesseComponent } from './components/hostesse/hostesse.component';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports:[BecomeHostessComponent, MobileNavComponent,DeskNavComponent, SharedModuleModule, HostesseComponent, NgIf,RouterModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DimondG';
  logoSrc: string = 'assets/logo.png';
  menuOpen: boolean = false;
  isMobileView: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkIfMobile();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile();
  }

  private checkIfMobile() {
    this.isMobileView = window.innerWidth <= 600;
  }
}
