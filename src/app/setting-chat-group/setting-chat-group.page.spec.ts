import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingChatGroupPage } from './setting-chat-group.page';

describe('SettingChatGroupPage', () => {
  let component: SettingChatGroupPage;
  let fixture: ComponentFixture<SettingChatGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingChatGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingChatGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
