import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KmHrDetailPage } from './km-hr-detail.page';

describe('KmHrDetailPage', () => {
  let component: KmHrDetailPage;
  let fixture: ComponentFixture<KmHrDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmHrDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KmHrDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
