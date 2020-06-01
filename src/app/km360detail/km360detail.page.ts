import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-km360detail',
  templateUrl: './km360detail.page.html',
  styleUrls: ['./km360detail.page.scss'],
})
export class Km360detailPage implements OnInit {
  data: any;
  detail: any;
  detail_img: any;
  file: any;

  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private route: ActivatedRoute, 
    private apidataService: ApidataService,
    private router: Router


  ) { }

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
        if (this.route.snapshot.data['special']) {
          this.data = this.route.snapshot.data['special'];
         // console.log(this.data);

          this.apidataService.getkmimgdetail(this.route.snapshot.params.id)
          .then(async (response: any) => {
            this.detail = response;
            console.log( response);
           
          
         })
         .catch(async err => {
          console.log(err);
            this.authService.removeCredentials();
            // console.log( response);
         }) 
        
          this.apidataService.getkmfile(this.route.snapshot.params.id)
          .then(async (response: any) => {
            this.file = response;
            console.log( response);
           
          
         })
         .catch(async err => {
          console.log(err);
            this.authService.removeCredentials();
            // console.log( response);
         }) 
        
        
         this.apidataService.getkmimgpreview(this.route.snapshot.params.id)
          .then(async (response: any) => {
            this.detail_img = response;
           // console.log( this.detail_img);
           
          
         })
         .catch(async err => {
          this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    window["plugins"].PushbotsPlugin.updateAlias("--");
         }) 
        
    
        }



         
      }else{
        this.navCtrl.navigateRoot('');
      }
    } catch (err) {
      console.log(err);
    }
  }




  downloadPdf(url: string, name: string) {
    const pdfUrl = 'http://52.220.179.36/nidapi/km/'+url;
    const pdfName = name;
    FileSaver.saveAs(pdfUrl, pdfName);
  }











}
