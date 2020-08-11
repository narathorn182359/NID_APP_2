import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletRewardsPage } from './wallet-rewards.page';

describe('WalletRewardsPage', () => {
  let component: WalletRewardsPage;
  let fixture: ComponentFixture<WalletRewardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletRewardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletRewardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
