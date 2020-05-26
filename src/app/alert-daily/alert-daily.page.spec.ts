import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertDailyPage } from './alert-daily.page';

describe('AlertDailyPage', () => {
  let component: AlertDailyPage;
  let fixture: ComponentFixture<AlertDailyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDailyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertDailyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
