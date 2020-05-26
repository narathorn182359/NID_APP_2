import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.page.html',
  styleUrls: ['./privileges.page.scss'],
})
export class PrivilegesPage implements OnInit {
  benefits: any;

  constructor( 
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService: ApidataService,
    private authService: AuthService,
    private router: Router,
    public modalController: ModalController
    
    ) { }

  ngOnInit() {
    this.checkAuthenticated();
  }




 



  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
      
        
             this.get_benefits();

      }else{
      
        this.navCtrl.navigateRoot('');
      }
    } catch (err) {
      console.log(err);
      this.authService.removeCredentials();
      this.navCtrl.navigateRoot('');
    }
  }

  get_benefits(){
    this.apidataService.get_list_benefits()
    .then(async (response: any) => {
    this.benefits = response;
   console.log(response) 
   })
  }


}
