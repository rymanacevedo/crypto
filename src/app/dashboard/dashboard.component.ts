import { CoinbaseService } from './../services/coinbase.service';
import { UpholdService } from './../services/uphold.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private currency = 'USD';
  private blockchain = 'BTC';
  constructor(private upholdService: UpholdService, private coinbaseService: CoinbaseService) { }

  ngOnInit(): void {
    this.coinbaseService.getPrices().subscribe(r => {

    });
  }

}
