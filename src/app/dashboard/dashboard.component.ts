import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { KucoinService } from './../services/kucoin.service';
import { CoinbaseService } from './../services/coinbase.service';
import { UpholdService } from './../services/uphold.service';
import { CoinmetroService } from '../services/coinmetro.service';
import { BinanceService } from '../services/binance.service';
import { CryptoService } from '../services/crypto.service';
import { KrakenService } from '../services/kraken.service';
import { AlpacaService } from '../services/alpaca.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public currency = 'USD';
  public blockchain = 'BTC';
  data = [];
  constructor(
    private upholdService: UpholdService,
    private coinbaseService: CoinbaseService,
    private kucoinService: KucoinService,
    private cryptoService: CryptoService,
    private binanceService: BinanceService,
    private coinmetroService: CoinmetroService,
    private krakenService: KrakenService,
    private alpacaService: AlpacaService
  ) { }

  ngOnInit(): void {
    // forkJoin the service calls
    forkJoin([
      this.upholdService.getPrices(this.blockchain, this.currency),
      this.coinbaseService.getPrices(this.blockchain, this.currency),
      this.kucoinService.getPrices(this.blockchain, this.currency),
      this.binanceService.getPrices(this.blockchain, this.currency),
      this.coinmetroService.getPrices(this.blockchain, this.currency),
      this.cryptoService.getPrices(this.blockchain, this.currency),
      this.krakenService.getPrices(this.blockchain, this.currency),
      this.alpacaService.getPrices(this.blockchain, this.currency)
    ]).subscribe(results => {
      this.data = results;
     }
    );
  }

  searchCrypto() {
    forkJoin([
      this.upholdService.getPrices(this.blockchain, this.currency),
      this.coinbaseService.getPrices(this.blockchain, this.currency),
      this.kucoinService.getPrices(this.blockchain, this.currency),
      this.binanceService.getPrices(this.blockchain, this.currency),
      this.coinmetroService.getPrices(this.blockchain, this.currency),
      this.cryptoService.getPrices(this.blockchain, this.currency),
      this.krakenService.getPrices(this.blockchain, this.currency),
      this.alpacaService.getPrices(this.blockchain, this.currency)
    ]).subscribe(results => {
      this.data = results;
     }
    );
  }



}
