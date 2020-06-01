import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';
import { ModalController,NavController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-km360list',
  templateUrl: './km360list.page.html',
  styleUrls: ['./km360list.page.scss'],
})
export class Km360listPage implements OnInit {
  data: any;
  img: any;
  id: string;

  constructor(  
    
    private route: ActivatedRoute, 
    private router: Router,
    private apidataService: ApidataService,
    private storage: Storage,
    private authService: AuthService,
    public navCtrl: NavController, 
    
    ) { }

  ngOnInit() {
  }
  async ionViewWillEnter(){

    this.id = this.route.snapshot.paramMap.get('id');  
    this.apidataService.getkm360list(this.id).then(async (response: any) => {
    this.data  = response;
    console.log(this.data);
  })
   .catch(async err => {
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    window["plugins"].PushbotsPlugin.updateAlias("--");
   })



  }


  async list_km360detail(id:any){
    this.router.navigateByUrl('/tabss/tabs/tab1/km360detail/'+id);

  }







}
