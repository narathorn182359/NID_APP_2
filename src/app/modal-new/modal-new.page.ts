import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../api/apidata.service';
import { DomSanitizer} from '@angular/platform-browser';
import { ModalController,NavController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.page.html',
  styleUrls: ['./modal-new.page.scss'],
})
export class ModalNewPage implements OnInit {
  datainfouser: any;
  url:any;
  constructor(
    private apidataService:ApidataService,
    private sanitizer: DomSanitizer,
    private modalController: ModalController,
    public navCtrl: NavController, 
    private authService: AuthService,

  ) { }

  ngOnInit() {

    this.apidataService.getuserid()
    .then(async (response: any) => {
      this.datainfouser = response;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://18.140.109.247/kpi');
      console.log( this.url)
      
      
   })
   .catch(async err => {
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');

    console.log(err)
   })

  }



  dismissModal() {
    this.modalController.dismiss();

   }
}
