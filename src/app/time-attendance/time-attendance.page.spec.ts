import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimeAttendancePage } from './time-attendance.page';

describe('TimeAttendancePage', () => {
  let component: TimeAttendancePage;
  let fixture: ComponentFixture<TimeAttendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAttendancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
