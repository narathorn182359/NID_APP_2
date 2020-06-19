import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddstafftochatPage } from './addstafftochat.page';

describe('AddstafftochatPage', () => {
  let component: AddstafftochatPage;
  let fixture: ComponentFixture<AddstafftochatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstafftochatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddstafftochatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
