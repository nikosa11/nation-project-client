import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "./country";
import { CountryStats } from "./CountryStats";
import { enviroment } from "./enviroment";
import { GdpPerPopulation } from "./GdpPerPopulation";

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    private apiServerUrl = enviroment.apiBaseUrl;
    
    constructor(private http: HttpClient) { }

    public getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiServerUrl}/country/all`);
    }

    public addCountry(Country: Country): Observable<Country> {
        return this.http.post<Country>(`${this.apiServerUrl}/country/add`,Country);
    }

    public updateCountry(Country: Country): Observable<Country> {
        return this.http.put<Country>(`${this.apiServerUrl}/country/update`,Country);
    }

    public deleteCountry(CountryId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/country/delete${CountryId}`);
    }

    public getLanguagesByCountryId(countryId: number): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/languages/${countryId}`);
    }

    public getAllGdpPerPopulation(): Observable<GdpPerPopulation []> {
        return this.http.get<any>(`${this.apiServerUrl}/country/gdp`);
    }

    public getAllCountryStats(): Observable<CountryStats []> {
        return this.http.get<any>(`${this.apiServerUrl}/country/stats`);
    }
}