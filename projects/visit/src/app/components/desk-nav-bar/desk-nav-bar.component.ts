import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-desk-nav-bar',
  standalone: true,
  imports: [RouterOutlet,CommonModule,],
  templateUrl: './desk-nav-bar.component.html',
  styleUrl: './desk-nav-bar.component.css'
})
export class DeskNavBarComponent {
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
