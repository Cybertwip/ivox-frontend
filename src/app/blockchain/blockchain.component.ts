import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  proposals = [];

  constructor(private _service: BlockchainService) { }

  ngOnInit() {
    this._service.getProposals().subscribe(
      res => {
        this.proposals = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  addProposal(proposal) {
    this._service.addProposal(proposal).subscribe(
      res => {
        this.proposals = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  editProposal(proposal) {
    this._service.editProposal(proposal).subscribe(
      res => {
        this.proposals = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
