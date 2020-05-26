import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Km360Page } from './km360.page';

describe('Km360Page', () => {
  let component: Km360Page;
  let fixture: ComponentFixture<Km360Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Km360Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Km360Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
