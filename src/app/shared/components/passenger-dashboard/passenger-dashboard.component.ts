import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  passengerInfo : Array<Ipassenger> = [];
  constructor(private _passService : PassengersService) {}

  ngOnInit(): void {
    this.passengerInfo = this._passService.getAllPAssengers()
  }
}
