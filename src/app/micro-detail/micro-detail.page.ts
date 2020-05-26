import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IdeaService, Idea } from '../api/comment.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-micro-detail',
  templateUrl: './micro-detail.page.html',
  styleUrls: ['./micro-detail.page.scss'],
  providers: [DatePipe]
})

@Injectable({
  providedIn: 'root'
})


export class MicroDetailPage implements OnInit {
  data:any;
  imglist:any;
  id:any;
  loading: any = false;
  
  
  idea: Idea = {
    name: '',
    notes: '',
    headnew:'',
    img:'',
    date:''
  };
  
  myDate = new Date();
  
  public ideas: Observable<Idea[]>;
  constructor(
    
    private datePipe: DatePipe,
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private route: ActivatedRoute, 
    private apidataService: ApidataService,
    private router: Router,
    private ideaService: IdeaService,
    private toastCtrl: ToastController,
    
    ) {

      this.id = this.route.snapshot.params.id;
     }

     ngOnInit() {
    }
    async ionViewWillEnter(){
      this.checkAuthenticated();
    this.onSearchInput();
   
    }
  
    async checkAuthenticated ()
    {
      try {
        let isAuthenticated = await this.authService.checkIsAuthenticated();
        if ( isAuthenticated == true) {
          this.apidataService.getDetail_new(this.route.snapshot.paramMap.get('id')).then(async (response: any) => {
            this.data = response;
            this.ideas = this.ideaService.getIdeas(this.route.snapshot.params.id);
            this.loading = false;
         })
         .catch(async err => {
          console.log(err);
         })





         /*  if (this.route.snapshot.data['special']) {
            this.data = this.route.snapshot.data['special'];
          
            this.apidataService.getimg(this.route.snapshot.params.id)
            .then(async (response: any) => {
              this.imglist = response;
              console.log( response);
             
            
           })
           .catch(async err => {
            console.log(err);
              this.authService.removeCredentials();
              this.navCtrl.navigateRoot('');
           }) } */
        }else{
          this.navCtrl.navigateRoot('');
        }
      } catch (err) {
        console.log(err);
      }
    }
  
    onSearchInput(){
      this.loading = true;
  }
  
  addIdea() {
    this.apidataService.getuserInfo()
    .then(async (response: any) => {
  
     this.idea.img = response.img;
     this.idea.name = response.Name_Thai;
     this.idea.date = this.datePipe.transform(this.myDate, 'dd/MM/yyyy HH:mm')
  
    if(this.idea.notes !=''){
      this.ideaService.addIdea(this.idea).then(() => {
        this.idea.notes ='';
     
      }, err => {
      
        this.showToast('There was a problem adding your idea :(');
      });
  
  
  
    }
   
      
   })
   .catch(async err => {
    
   })
  
  
  }
  
  
  
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
  
  
  

}
