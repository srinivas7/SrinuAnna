import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Angular ";
  selected: any;
  highlighted: any = null;
  cols = [
    { field: "vin", header: "Vin", index: 1 },
    { field: "year", header: "Year", index: 2 },
    { field: "brand", header: "Brand", index: 3 },
    { field: "color", header: "Color", index: 4 }
  ];
  brands = [
    { brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff" },
    { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
    { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
    { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
    { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" }
  ];

  setHighlighted(rowData: any) {
    this.highlighted = rowData;
  }
}
