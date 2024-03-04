import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeskNavBarComponent } from './components/desk-nav-bar/desk-nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DeskNavBarComponent],
  templateUrl: './app.component.html',
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
    this.isMobileView = window.innerWidth <= 800;
  }
}
