import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListNewPage } from './list-new.page';

describe('ListNewPage', () => {
  let component: ListNewPage;
  let fixture: ComponentFixture<ListNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
