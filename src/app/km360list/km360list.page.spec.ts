import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Km360listPage } from './km360list.page';

describe('Km360listPage', () => {
  let component: Km360listPage;
  let fixture: ComponentFixture<Km360listPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Km360listPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Km360listPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
