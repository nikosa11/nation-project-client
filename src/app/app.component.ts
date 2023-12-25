import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Country } from './country';
import { CountriesService } from './country.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LanguageModalComponent } from './modal/language-modal.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private router: Router) { }
  goToPage1(): void {
    this.router.navigate(['/page1']);
  }
  goToPage2(): void {
    this.router.navigate(['/page2']);
  }
  goToPage3(): void {
    this.router.navigate(['/page3']);
  }

}
