import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompetencyPage } from './competency.page';

describe('CompetencyPage', () => {
  let component: CompetencyPage;
  let fixture: ComponentFixture<CompetencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
