import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBenefitsPage } from './modal-benefits.page';

describe('ModalBenefitsPage', () => {
  let component: ModalBenefitsPage;
  let fixture: ComponentFixture<ModalBenefitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBenefitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBenefitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
