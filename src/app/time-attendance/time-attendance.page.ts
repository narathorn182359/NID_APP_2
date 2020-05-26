import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-time-attendance',
  templateUrl: './time-attendance.page.html',
  styleUrls: ['./time-attendance.page.scss'],
})
export class TimeAttendancePage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService: ApidataService,
    private authService: AuthService
  ) {  }

  ngOnInit() {
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
