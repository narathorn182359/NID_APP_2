import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateGroupChatPage } from './create-group-chat.page';

describe('CreateGroupChatPage', () => {
  let component: CreateGroupChatPage;
  let fixture: ComponentFixture<CreateGroupChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGroupChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
