import { Component, OnInit } from '@angular/core';
import { PassengersService } from '../../services/passengers.service';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss'],
})
export class PassCountComponent implements OnInit {
  allPassCount!: number;
  checkInPassCount!: number;
  passArray!: Array<Ipassenger>;
  constructor(private _passService: PassengersService) {}

  ngOnInit(): void {
    this.passArray = this._passService.getAllPAssengers();
    this.allPassCount = this.passArray.length;
    this.checkInPassCount = this.passArray.filter((pass) =>  pass.checkedIn === true).length;
  }
}
