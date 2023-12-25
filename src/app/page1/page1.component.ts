import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Country } from '../country';
import { CountriesService } from '../country.service';
import { LanguageModalComponent } from '../modal/language-modal.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit{
  public countries: Country[] | undefined;
  
  constructor(private countryService: CountriesService , public dialog: MatDialog) { }
ngOnInit(): void {
  this.getCountries();  
}
openLanguageModal(countryId: number): void {
  const dialogRef = this.dialog.open(LanguageModalComponent, {
    width: '500px', 
    data: {
      countryId: countryId
    }
  });

  dialogRef.afterClosed().subscribe(result => {
  
  });
}
public getCountries(): void {
  this.countryService.getCountries().subscribe(
    (response: Country[]) => {
      this.countries = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}

}
