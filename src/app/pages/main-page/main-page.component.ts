import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bitcoin } from 'src/app/model/bitcoin.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  bitcoinInfo$!: Observable<Bitcoin>;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getBitcoinInfo();
  }

  getBitcoinInfo() {
    this.bitcoinInfo$ = this.mainService.getBitcoin();
  }
}
