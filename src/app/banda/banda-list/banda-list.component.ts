import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<Banda> = [];
  selected: Boolean = false;
  selectedBanda!: Banda;
  constructor(private bandaService:BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      console.log(bandas);
    });
  }

  getNombreMayor():string{
    let mayor=0;
    let nombre="";
    this.bandas.forEach((banda) => {
      if (2023-banda.foundation_year>mayor){
        mayor=2023-banda.foundation_year
        nombre=banda.name
      }
      })
    return nombre;
  }

  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  getMayor():number{
    let mayor=0;
    let nombre="";
    this.bandas.forEach((banda) => {
      if (2023-banda.foundation_year>mayor){
        mayor=2023-banda.foundation_year
        nombre=banda.name
      }
      })
    return mayor;
  }

  ngOnInit() {
    this.getBandas();
  }

}
