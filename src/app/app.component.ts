import { Component } from '@angular/core';
import {Beer, BeersService} from "./service/beers.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'beers-fe';

  public beers: Beer[] = [];

  addBeerForm = this.formBuilder.group({
    name: '',
    percentage: ''
  });

  public constructor(private beerService: BeersService, private formBuilder: FormBuilder) {
    this.refreshData();
  }

  public removeBeer(id: string | undefined): void {
    if (id) {
      this.beerService.deleteBeer(id).subscribe(() => {
        this.refreshData();
      });
    }

  }

  onSubmit(): void {
    // Process checkout data here
    console.log(this.addBeerForm.value);
    this.beerService.addBeer(this.addBeerForm.value.name, this.addBeerForm.value.percentage).subscribe(() => {
      this.refreshData();
    })
    this.addBeerForm.reset();
  }

  private refreshData(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }

}
