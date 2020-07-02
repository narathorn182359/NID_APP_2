import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApidataService } from "../api/apidata.service";
import { Storage } from "@ionic/storage";
import { ModalController, NavController } from "@ionic/angular";
import { AuthService } from "../api/auth.service";

@Component({
  selector: "app-km-hr-list",
  templateUrl: "./km-hr-list.page.html",
  styleUrls: ["./km-hr-list.page.scss"]
})
export class KmHrListPage implements OnInit {
  data: any;

  constructor(
    private apidataService: ApidataService,
    private router: ActivatedRoute,
    public navCtrl: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.apidataService
      .listkmhr(this.router.snapshot.paramMap.get("id"))
      .then(async (response: any) => {
        this.data = response;

        console.log(response);
      })
      .catch(async err => {
        console.log(err);
        this.authService.removeCredentials();
        this.navCtrl.navigateRoot("/login");
      });
  }
}
