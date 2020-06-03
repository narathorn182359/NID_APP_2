import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatWithHrPage } from './chat-with-hr.page';

describe('ChatWithHrPage', () => {
  let component: ChatWithHrPage;
  let fixture: ComponentFixture<ChatWithHrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWithHrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatWithHrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
