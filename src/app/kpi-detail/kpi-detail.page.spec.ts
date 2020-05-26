import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KpiDetailPage } from './kpi-detail.page';

describe('KpiDetailPage', () => {
  let component: KpiDetailPage;
  let fixture: ComponentFixture<KpiDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KpiDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
