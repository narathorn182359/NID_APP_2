import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Km360detailPage } from './km360detail.page';

describe('Km360detailPage', () => {
  let component: Km360detailPage;
  let fixture: ComponentFixture<Km360detailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Km360detailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Km360detailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
