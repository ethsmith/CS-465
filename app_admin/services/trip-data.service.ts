import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Trip } from '../models/trip';

@Injectable()
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = "http://localhost:3000/api";

  public getTrips() : Promise<Trip[]> {
    console.log("TripDataService.getTrips() called");
    return this.http.get(`${this.apiBaseUrl}/trips`)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public addTrip(newTrip: Trip) : Promise<Trip> {
    console.log("TripDataService.addTrip() called");
    return this.http
      .post(`${this.apiBaseUrl}/trips`, newTrip)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string) : Promise<Trip> {
    console.log("TripDataService.getTrip() called");
    return this.http
      .get(`${this.apiBaseUrl}/trips/${tripCode}`)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public updateTrip(trip: Trip) : Promise<Trip> {
    console.log("TripDataService.updateTrip() called");
    console.log(trip)
    return this.http
      .put(`${this.apiBaseUrl}/trips/${trip.code}`, trip)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }
}
