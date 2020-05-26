import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KmHrListPage } from './km-hr-list.page';

describe('KmHrListPage', () => {
  let component: KmHrListPage;
  let fixture: ComponentFixture<KmHrListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmHrListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KmHrListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
