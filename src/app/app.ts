import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('drone-survey-site');
  menuOpen = false;
  theme: 'light' | 'dark' = 'light';
  currentYear = new Date().getFullYear();

  ngOnInit() {
    const saved = localStorage.getItem('theme');
    this.theme = saved === 'dark' ? 'dark' : 'light';
    document.body.classList.toggle('dark-mode', this.theme === 'dark');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-mode', this.theme === 'dark');
    localStorage.setItem('theme', this.theme);
  }



}
