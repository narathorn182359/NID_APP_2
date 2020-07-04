import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';
import { ModalController,NavController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';


@Component({
  selector: 'app-km-hrdetail',
  templateUrl: './km-hrdetail.page.html',
  styleUrls: ['./km-hrdetail.page.scss'],
})
export class KmHrdetailPage implements OnInit {
  data: any;

  constructor(
    private apidataService: ApidataService,
    private router: ActivatedRoute,
    public navCtrl: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {



  }


   ionViewWillEnter() {
    this.apidataService
      .listkmhrdetail(this.router.snapshot.paramMap.get("id"))
      .then( (response: any) => {
        this.data = response;

        console.log(response);
      })
      .catch( err => {
        console.log(err);
        this.authService.removeCredentials();
        this.navCtrl.navigateRoot("/login");
      });
  }

}
