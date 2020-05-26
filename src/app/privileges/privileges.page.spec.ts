import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivilegesPage } from './privileges.page';

describe('PrivilegesPage', () => {
  let component: PrivilegesPage;
  let fixture: ComponentFixture<PrivilegesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivilegesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
