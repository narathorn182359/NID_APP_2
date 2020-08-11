import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { Service } from "../../settings/Laravel";
@Component({
  selector: "app-wallet-pay",
  templateUrl: "./wallet-pay.page.html",
  styleUrls: ["./wallet-pay.page.scss"]
})
export class WalletPayPage implements OnInit {
  history_pay: any;
  loading: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private storage: Storage
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.loading = true;
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    this.http
      .get(`${Service.apiUrl}/history_pay`, { headers })
      .subscribe(response => {
        this.loading = false;
        this.history_pay = response;
        console.log(response);
      });
  }

  async doRefresh(event) {
    this.loading = false;

    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    this.http
      .get(`${Service.apiUrl}/history_pay`, { headers })
      .subscribe(response => {
        this.history_pay = response;
        event.target.complete();
        console.log(response);
      });
  }
}
