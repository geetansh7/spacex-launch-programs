import { Component } from '@angular/core';
import { LaunchMissionsHttpService } from './services/launch-missions-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spacex-launch-programs';
  launchMissions = [];

  constructor(private launchMissionsHttpService: LaunchMissionsHttpService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.launchMissionsHttpService.getAllLaunchMissions().subscribe((result) => {
      console.log(result);
      this.launchMissions = result;
    });
  }
  changeMissions(filters){
    let params: any = {};
    if(filters.year){
      params.launch_year = filters.year;
    }
    if(filters.isLaunched){
      params.launch_success = filters.isLaunched;
    }
    if(filters.isLanded){
      params.land_success = filters.isLanded;
    }
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: params});
    this.launchMissionsHttpService.getFilteredLaunchMissions(filters).subscribe((result) => {
      console.log(result);
      this.launchMissions = result;
    });
  }
}
