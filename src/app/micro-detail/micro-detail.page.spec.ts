import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MicroDetailPage } from './micro-detail.page';

describe('MicroDetailPage', () => {
  let component: MicroDetailPage;
  let fixture: ComponentFixture<MicroDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MicroDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
