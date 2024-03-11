import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-client',
  standalone: true,
  imports: [],
  templateUrl: './navbar-client.component.html',
  styleUrl: './navbar-client.component.css'
})
export class NavbarClientComponent implements OnInit {
  constructor() { }
  logoSrc: string = 'assets/logo.png';
  ngOnInit(): void {
    // Toggle sidebar
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');

    if (sidebarCollapse && sidebar) {
      sidebarCollapse.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
    }
  }
}
