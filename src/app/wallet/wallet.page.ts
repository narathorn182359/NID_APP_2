import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { Service } from "../../settings/Laravel";
@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"]
})
export class WalletPage implements OnInit {
  balancevalue: any;
  history_last_add: any;
  history_last_pay: any;
  loading: boolean;

  constructor(
    platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private storage: Storage
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

  async ionViewWillEnter() {
    this.loading = true;
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    this.http
      .get(`${Service.apiUrl}/balancevalue`, { headers })
      .subscribe(response => {
        this.balancevalue = response;

        // console.log(response);
      });

    this.http
      .get(`${Service.apiUrl}/history_last_add`, { headers })
      .subscribe(response => {
        this.history_last_add = response;
        this.loading = false;
      });

    this.http
      .get(`${Service.apiUrl}/history_last_pay`, { headers })
      .subscribe(response => {
        this.history_last_pay = response;
        this.loading = false;
      });
  }
  async doRefresh(event) {
    this.loading = true;
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    this.http
      .get(`${Service.apiUrl}/balancevalue`, { headers })
      .subscribe(response => {
        this.balancevalue = response;

        // console.log(response);
      });

    this.http
      .get(`${Service.apiUrl}/history_last_add`, { headers })
      .subscribe(response => {
        this.history_last_add = response;
        this.loading = false;
        event.target.complete();
      });

    this.http
      .get(`${Service.apiUrl}/history_last_pay`, { headers })
      .subscribe(response => {
        this.history_last_pay = response;
        this.loading = false;
        event.target.complete();
      });
  }
}
