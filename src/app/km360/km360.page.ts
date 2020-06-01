import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../api/apidata.service';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { AuthService } from '../api/auth.service';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";
import { DomController } from "@ionic/angular";
import { Router } from '@angular/router';
@Component({
  selector: 'app-km360',
  templateUrl: './km360.page.html',
  styleUrls: ['./km360.page.scss'],
})
export class Km360Page implements OnInit {
  @Input("myScrollVanish") scrollArea;

  private hidden: boolean = false;
  private triggerDistance: number = 20;
  public searchControl: FormControl;
  public items:any;
  searching: any = false;
  category:any;
  search: any;
  constructor(  
    private apidataService: ApidataService,
    private authService: AuthService,
    public navCtrl: NavController, 
    private element: ElementRef,
    private renderer: Renderer2,
    private domCtrl: DomController,
    private router: Router
    ) { 

    this.searchControl = new FormControl();



    
  }

  ngOnInit() {
    this.setFilteredItems("");
    this.checkAuthenticated();
    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredItems(search);
        this.searching = false;
      });
  }

  onSearchInput(){
    this.searching = true;
}

  setFilteredItems(searchTerm) {
    this.items = this.apidataService.filterItems(searchTerm);
    if(searchTerm == ""){
      this.getkm360();
      this.search = [];
      console.log(this.items);
    }
    else{
      console.log("ค้นหา");
      this.category = [];
      this.search = this.items;
      console.log(this.items);
    }     
  }


  async ionViewWillEnter(){
   

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
      this.authService.removeCredentials();
      this.navCtrl.navigateRoot('');
    }
  
  }

  getkm360() {
    this.searching = true;
    this.apidataService.get_km360()
    .then(async (response: any) => {
    this.category = response
      // console.log(response)
       this.searching = false;
      
   })
   .catch(async err => {
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    window["plugins"].PushbotsPlugin.updateAlias("--");
 
    console.log(err);
    
 
 
   })


  }

  async list_km360(id:any){
    if(id == 13){
      this.router.navigateByUrl('/tabss/tabs/tab1/product/'+id);
    }else if(id == 3){
      this.router.navigateByUrl('/tabss/tabs/tab1/km-hr/'+id);
    }else{
      this.router.navigateByUrl('/tabss/tabs/tab1/km360list/'+id);
    }
   
  }


}
