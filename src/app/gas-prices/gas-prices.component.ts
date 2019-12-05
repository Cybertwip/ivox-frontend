import { Component, OnInit } from '@angular/core';
import { GasPricesService } from '../gas-prices.service';

@Component({
  selector: 'app-gas-prices',
  templateUrl: './gas-prices.component.html',
  styleUrls: ['./gas-prices.component.css']
})
export class GasPricesComponent implements OnInit {

  gasPrices = [];

  constructor(private _eventService: GasPricesService) { }

  ngOnInit() {
    this._eventService.getGasPrices({tag: 'all'}).subscribe(
      res => {
        this.gasPrices = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  addGasPrice(currency) {
    this._eventService.addGasPrice(currency).subscribe(
      res => {
        this.gasPrices = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  editGasPrice(currency) {
    this._eventService.editGasPrice(currency).subscribe(
      res => {
        this.gasPrices = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteGasPrice(currency){
    this._eventService.deleteGasPrice(currency).subscribe(
      res => {
        this.gasPrices = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}

