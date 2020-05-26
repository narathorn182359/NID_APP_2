import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PositionDetailPage } from './position-detail.page';

describe('PositionDetailPage', () => {
  let component: PositionDetailPage;
  let fixture: ComponentFixture<PositionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
