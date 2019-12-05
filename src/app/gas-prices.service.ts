import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_ENDPOINT_URL } from './apiUrl'

@Injectable({
  providedIn: 'root'
})
export class GasPricesService {
  
  private _getGasPriceUrl = `${API_ENDPOINT_URL}/api/gas/get`;
  private _addGasPriceUrl = `${API_ENDPOINT_URL}/api/gas/add`;
  private _editGasPriceUrl = `${API_ENDPOINT_URL}/api/gas/edit`;
  private _deleteGasPriceUrl = `${API_ENDPOINT_URL}/api/gas/delete`;

  constructor(private http: HttpClient) { }

  getGasPrices(filter){
    return this.http.post<any>(this._getGasPriceUrl, filter);
  }

  addGasPrice(currency){
    return this.http.post<any>(this._addGasPriceUrl, currency);
  }

  editGasPrice(currency){
    return this.http.post<any>(this._editGasPriceUrl, currency);
  }

  deleteGasPrice(currency){
    return this.http.post<any>(this._deleteGasPriceUrl, currency);
  }

}
