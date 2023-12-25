import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountriesService } from '../country.service';


@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.component.html',
  styleUrl: './language-modal.component.css'
})
export class LanguageModalComponent {
  languages: any[] | undefined; 

  constructor(
    public dialogRef: MatDialogRef<LanguageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private countriesService: CountriesService 
  ) {
    if (data && data.countryId) {
      this.countriesService.getLanguagesByCountryId(data.countryId).subscribe(
        (response: any) => {
          this.languages = response;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
   }
   getTitle(languages: any[]): string {
    if (languages.length > 1) {
      return 'Languages';
    } else {
      return 'Language';
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}