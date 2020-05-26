import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingstaffPage } from './settingstaff.page';

describe('SettingstaffPage', () => {
  let component: SettingstaffPage;
  let fixture: ComponentFixture<SettingstaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingstaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingstaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
