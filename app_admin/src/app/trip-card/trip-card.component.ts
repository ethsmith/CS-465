import {Component, Input, OnInit} from '@angular/core';
import { Trip } from '../../../models/trip';
import {Router} from "@angular/router";

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  private editTrip(trip: Trip) : void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }
}
