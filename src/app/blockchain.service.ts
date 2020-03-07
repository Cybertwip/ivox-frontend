import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_ENDPOINT_URL } from './apiUrl'

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  
  private _getProposalsUrl = `${API_ENDPOINT_URL}/api/blockchain/getProposals`;
  private _addProposalUrl = `${API_ENDPOINT_URL}/api/blockchain/propose`;
  private _editProposalUrl = `${API_ENDPOINT_URL}/api/blockchain/editProposal`;

  constructor(private http: HttpClient) { }

  getProposals(){
    return this.http.get<any>(this._getProposalsUrl);
  }

  addProposal(proposal){
    return this.http.post<any>(this._addProposalUrl, proposal);
  }

  editProposal(proposal){
    return this.http.post<any>(this._editProposalUrl, proposal);
  }

}
