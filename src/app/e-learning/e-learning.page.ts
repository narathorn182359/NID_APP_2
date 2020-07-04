import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../api/apidata.service';
import { DomSanitizer} from '@angular/platform-browser';
import { ModalController,NavController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.page.html',
  styleUrls: ['./e-learning.page.scss'],
})
export class ELearningPage implements OnInit {
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
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://18.140.109.247/learning/loginuser?identity='+this.datainfouser.username+'&password='+this.datainfouser.id_card);
      console.log( this.url)
      
      
   })
   .catch(async err => {
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    window["plugins"].PushbotsPlugin.updateAlias("--");
    console.log(err)
   })

  }

  dismissModal() {
    this.modalController.dismiss();

   }

}
