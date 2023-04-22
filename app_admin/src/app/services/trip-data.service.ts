import {Inject, Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable()
export class TripDataService {

  constructor(
    private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

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

    let token= localStorage.getItem("travlr-token");

    const headers = new Headers({ 'Authorization': `Bearer ${token}` });

    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(`${this.apiBaseUrl}/trips`, newTrip, options)
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

    let token= localStorage.getItem("travlr-token");

    const headers = new Headers({ 'Authorization': `Bearer ${token}` });

    const options = new RequestOptions({ headers: headers });

    return this.http
      .put(`${this.apiBaseUrl}/trips/${trip.code}`, trip, options)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }
  private makeAuthApiCall(urlPath: string, user: User):
    Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response.json() as AuthResponse)
      .catch(this.handleError);
  }
}
