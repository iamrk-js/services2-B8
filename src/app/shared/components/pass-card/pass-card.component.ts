import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  @Input() passInfo !: Ipassenger;
  inEditMode : boolean = false;
  constructor(private _passService : PassengersService) { }

  ngOnInit(): void {
  }
  onPassRemove(id:number){
    this._passService.removePAssenger(id)
  }
}
