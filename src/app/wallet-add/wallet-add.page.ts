import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { Service } from "../../settings/Laravel";
@Component({
  selector: "app-wallet-add",
  templateUrl: "./wallet-add.page.html",
  styleUrls: ["./wallet-add.page.scss"]
})
export class WalletAddPage implements OnInit {
  history_add: any;
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
      .get(`${Service.apiUrl}/history_add`, { headers })
      .subscribe(response => {
        this.loading = false;
        this.history_add = response;
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
      .get(`${Service.apiUrl}/history_add`, { headers })
      .subscribe(response => {
        this.loading = false;
        this.history_add = response;
        event.target.complete();
      });

  
  
  }








}
