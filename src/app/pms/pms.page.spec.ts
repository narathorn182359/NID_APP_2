import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PMSPage } from './pms.page';

describe('PMSPage', () => {
  let component: PMSPage;
  let fixture: ComponentFixture<PMSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PMSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
