import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchMissionsHttpService {

  constructor(private http: HttpClient) { }

  getAllLaunchMissions(): Observable<[]>{
    return this.http.get<[]>('https://api.spacexdata.com/v3/launches?limit=100');
  }
  getFilteredLaunchMissions(filters: any): Observable<[]>{
    debugger;
      let params = new HttpParams();
      if(filters.year){
        params = params.append('launch_year', filters.year);
      }
      if(filters.isLaunched){
        params = params.append('launch_success', filters.isLaunched);
      }
      if(filters.isLanded){
        params = params.append('land_success', filters.isLanded);
      }
      return this.http.get<[]>('https://api.spacexdata.com/v3/launches?limit=100', {params: params});
  }
}
