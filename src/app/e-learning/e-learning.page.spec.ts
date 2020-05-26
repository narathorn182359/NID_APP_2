import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ELearningPage } from './e-learning.page';

describe('ELearningPage', () => {
  let component: ELearningPage;
  let fixture: ComponentFixture<ELearningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ELearningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
