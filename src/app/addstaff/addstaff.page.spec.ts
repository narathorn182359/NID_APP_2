import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddstaffPage } from './addstaff.page';

describe('AddstaffPage', () => {
  let component: AddstaffPage;
  let fixture: ComponentFixture<AddstaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddstaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
