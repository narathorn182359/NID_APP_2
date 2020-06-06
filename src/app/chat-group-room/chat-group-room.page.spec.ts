import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatGroupRoomPage } from './chat-group-room.page';

describe('ChatGroupRoomPage', () => {
  let component: ChatGroupRoomPage;
  let fixture: ComponentFixture<ChatGroupRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupRoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatGroupRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
