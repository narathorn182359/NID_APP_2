import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalNewPage } from './modal-new.page';

describe('ModalNewPage', () => {
  let component: ModalNewPage;
  let fixture: ComponentFixture<ModalNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
