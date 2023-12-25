import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountriesService } from '../country.service';
import { GdpPerPopulation } from '../GdpPerPopulation';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component implements OnInit{
  public gdpPerPopulation: GdpPerPopulation[] | undefined;
  
  constructor(private countryService: CountriesService , public dialog: MatDialog) { }
ngOnInit(): void {
  this.getGdpPerPopulation();  
}
public getGdpPerPopulation(): void {
  this.countryService.getAllGdpPerPopulation().subscribe(
    (response: GdpPerPopulation []) => {
      this.gdpPerPopulation = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}
}
