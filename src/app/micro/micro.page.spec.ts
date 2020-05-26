import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MicroPage } from './micro.page';

describe('MicroPage', () => {
  let component: MicroPage;
  let fixture: ComponentFixture<MicroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MicroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
