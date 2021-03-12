import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Beer {
  _id?: string;
  name: string;
  percentage: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) {

  }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>('/api/beer');
  }

  addBeer(name: string, percentage: number): Observable<Beer> {
    return this.http.post<Beer>('/api/beer', {
      name,
      percentage
    });
  }

  deleteBeer(id: string) {
    return this.http.delete(`/api/beer/${id}`);
  }
}
