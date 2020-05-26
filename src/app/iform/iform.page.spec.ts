import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IformPage } from './iform.page';

describe('IformPage', () => {
  let component: IformPage;
  let fixture: ComponentFixture<IformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
