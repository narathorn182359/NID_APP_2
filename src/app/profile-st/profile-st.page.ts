import { Component, OnInit } from "@angular/core";
import { ApidataService } from "../api/apidata.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-profile-st",
  templateUrl: "./profile-st.page.html",
  styleUrls: ["./profile-st.page.scss"]
})
export class ProfileStPage implements OnInit {
  datainfouser: any;
  data: { chat_partner: any; owner_room: any; img_s: string };

  constructor(
    public apidataService: ApidataService,
    public router: ActivatedRoute,
    public route: Router,
    private routers: Router
  ) {}

  ngOnInit() {
    let data = this.router.snapshot.paramMap.get("id");
    this.apidataService.getDetail_Staff(data).then(async (response: any) => {
      this.datainfouser = response;

      console.log(data);
    });
  }

  async detail_staff(id) {
    this.apidataService.getuserid().then(async (response: any) => {
      let username = response.username;
      let img = response.username + ".jpg";
      this.data = {
        chat_partner: id,
        owner_room: username,
        img_s: img
      };
      console.log(img);
      this.routers.navigateByUrl(
        "/tabss/tabs/chat/detail-staff/" + id + "/" + username + "/" + img
      );
    });
  }
}
