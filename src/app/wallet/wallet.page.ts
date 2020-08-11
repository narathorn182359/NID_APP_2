import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"],
})
export class WalletPage implements OnInit {
  constructor(
    platform: Platform,
    private route: ActivatedRoute,
    private router: Router
  ) {
    platform.ready().then(() => {
      //alert(platform.width())
      //console.log('Width: ' + platform.width());
      // console.log('Height: ' + platform.height());
    });
  }

  ngOnInit() {}

  paywallet() {
    this.router.navigateByUrl("wallet-pay");
  }

  addwallet() {
    this.router.navigateByUrl("wallet-add");
  }

  rewardswallet() {
    this.router.navigateByUrl("wallet-rewards");
  }
}
