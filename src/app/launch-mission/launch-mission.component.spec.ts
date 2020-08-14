import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchMissionComponent } from './launch-mission.component';

describe('LaunchMissionComponent', () => {
  let component: LaunchMissionComponent;
  let fixture: ComponentFixture<LaunchMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
