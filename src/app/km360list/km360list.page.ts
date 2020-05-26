import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';


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
    private storage: Storage) { }

  ngOnInit() {
  }
  async ionViewWillEnter(){

    this.id = this.route.snapshot.paramMap.get('id');  
    this.apidataService.getkm360list(this.id).then(async (response: any) => {
    this.data  = response;
    console.log(this.data);
  })
   .catch(async err => {
    console.log(err);
   })



  }


  async list_km360detail(id:any){
    this.router.navigateByUrl('/km360detail/'+id);

  }







}
