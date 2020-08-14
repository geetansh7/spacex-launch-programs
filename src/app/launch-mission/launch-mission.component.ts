import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-mission',
  templateUrl: './launch-mission.component.html',
  styleUrls: ['./launch-mission.component.scss']
})
export class LaunchMissionComponent implements OnInit {

  @Input() launchMission;
  constructor() { }

  ngOnInit() {
    console.log(this.launchMission);
  }

}
