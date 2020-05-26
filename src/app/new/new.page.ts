import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor( public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private authService: AuthService) { }

  ngOnInit() {
  }
  async ionViewWillEnter(){
    this.checkAuthenticated();

  }
  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
        console.log(isAuthenticated);
      }else{
        this.navCtrl.navigateRoot('');
      }
    } catch (err) {
      console.log(err);
   
    }
  }
}
