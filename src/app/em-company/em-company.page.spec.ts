import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmCompanyPage } from './em-company.page';

describe('EmCompanyPage', () => {
  let component: EmCompanyPage;
  let fixture: ComponentFixture<EmCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmCompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
