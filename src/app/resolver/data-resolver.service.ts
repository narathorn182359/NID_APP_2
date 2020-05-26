import { ApidataService } from '../api/apidata.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage';

import { AuthService } from '../api/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {
  feedlist:any
  detail:any
  head:any
  constructor(private dataService: ApidataService, private storage: Storage) { }
 
  resolve(route: ActivatedRouteSnapshot) {
    const segment = route.url[0].path;
   
  
   switch (segment) {
    case 'list-new':
      let id = route.paramMap.get('id');
      this.feedlist = this.dataService.getDetailnew(id);
      this.storage.set('idnew', {
        id: id,
        
      })
    // console.log( this.feedlist);
      return  this.feedlist;
    case 'detail-new':
      let id_1 = route.paramMap.get('id');
      this.detail = this.dataService.getDetail_new(id_1);
      // console.log(this.detail);
      return  this.detail;

    case 'kpi-detail':
  

      this.detail =  this.dataService.getuserInfo();
 

      
    return  this.detail;
    
    case 'detail-staff':
    let id_2 = route.paramMap.get('id');
    this.detail = this.dataService.getDetail_Staff(id_2);

    return  this.detail;

    case 'km360list':
      let id_3 = route.paramMap.get('id');
      this.detail = this.dataService.getkm360list(id_3);
  
      return  this.detail;

    case  'km360detail':
      let id_4 = route.paramMap.get('id');
      this.detail = this.dataService.getkm360list(id_4);
    
    return  this.detail;

    case  'micro':
      let id_5 = route.paramMap.get('id');
      this.detail = this.dataService.micro(id_5);
    
      return  this.detail;

    case  'micro-detail':
      let id_6 = route.paramMap.get('id');
      this.detail = this.dataService.getDetail_new(id_6);
    
      return  this.detail;

    case  'product':
        let id_7 = route.paramMap.get('id');
        this.detail = this.dataService.getProduct(id_7);
      
        return  this.detail;
     
    case  'product-list':
       let id_8 = route.paramMap.get('id');
        this.detail = this.dataService.getProduct_list(id_8);
        
          return  this.detail;    


    default:
    




  }

  }
}