import { UpholdService } from './../services/uphold.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private upholdService: UpholdService) { }

  ngOnInit(): void {
    this.upholdService.getToken(1);
  }

}
