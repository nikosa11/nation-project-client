import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CountriesService } from '../country.service';
import { CountryStats } from '../CountryStats';
import { PleaseWaitModalComponent } from '../please-wait-modal/please-wait-modal.component';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  public countryStats: CountryStats[] | undefined;
  public originalCountryStats: CountryStats[] | undefined;  
  public filterForm: FormGroup;

  constructor(
    private countryService: CountriesService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      regionName: [''],
      fromDate: [''],
      toDate: [''],
    });
  }

  ngOnInit(): void {
    this.getCountryStats();
    this.openPleaseWaitModal();
  }

  openPleaseWaitModal(): void {
    const dialogRef = this.dialog.open(PleaseWaitModalComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  closePleaseWaitModal(): void {
    this.dialog.closeAll();
  }

  public getCountryStats(): void {
    this.countryService.getAllCountryStats().subscribe(
      (response: CountryStats[]) => {
        this.countryStats = response;
        this.originalCountryStats = [...response];  // Αντιγραφή της αρχικής λίστας
        this.closePleaseWaitModal();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.closePleaseWaitModal();
      }
    );
  }

  applyFilters(): void {
    const filters = this.filterForm.value;
    if (this.originalCountryStats) {
      console.log('Εφαρμόζονται φίλτρα');
      this.countryStats = this.originalCountryStats.filter(country => {
        const regionNameMatch = !filters.regionName || country.regionName === filters.regionName;
        const fromDateMatch = !filters.fromDate || country.year >= new Date(filters.fromDate).getFullYear();
        const toDateMatch = !filters.toDate || country.year <= new Date(filters.toDate).getFullYear();
        return regionNameMatch && fromDateMatch && toDateMatch;
      });
    }
  }

  resetFilters(): void {
    if (this.originalCountryStats) 
       this.countryStats = [...this.originalCountryStats];
  }
}
