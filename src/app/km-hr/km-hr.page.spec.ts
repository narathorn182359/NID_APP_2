import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KmHrPage } from './km-hr.page';

describe('KmHrPage', () => {
  let component: KmHrPage;
  let fixture: ComponentFixture<KmHrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmHrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KmHrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
