import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KmHrdetailPage } from './km-hrdetail.page';

describe('KmHrdetailPage', () => {
  let component: KmHrdetailPage;
  let fixture: ComponentFixture<KmHrdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmHrdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KmHrdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
