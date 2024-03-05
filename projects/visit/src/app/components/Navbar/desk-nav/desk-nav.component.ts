import { Component, HostListener } from '@angular/core';
import { SharedModuleModule } from '../../../shared-module/shared-module.module';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desk-nav',
  standalone: true,
  imports: [ SharedModuleModule, NgIf, RouterModule],
  templateUrl: './desk-nav.component.html',
  styleUrl: './desk-nav.component.css'
})
export class DeskNavComponent {
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
