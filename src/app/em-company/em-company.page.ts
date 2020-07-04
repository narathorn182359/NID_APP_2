import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ApidataService } from "../api/apidata.service";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
@Component({
  selector: "app-em-company",
  templateUrl: "./em-company.page.html",
  styleUrls: ["./em-company.page.scss"]
})
export class EmCompanyPage implements OnInit {
  public searchControl: FormControl;
  company: any;
  data: any;
  searching: boolean;

  constructor(
    private storage: Storage,
    private apidataService: ApidataService,
    private router: Router
  ) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.get_contact("");
    this.searchControl.valueChanges
    .pipe(debounceTime(700))
    .subscribe((search) => {
      this.get_contact(search);
      this.searching = false;
    });
  }

  onSearchInput() {
    this.searching = true;
  }
  async get_contact(search:any){
   console.log(search);
    this.company  = await this.storage.get('company')
    this.apidataService.get_em_company(this.company,search)
    .then(async (response: any) => {
        this.data =response
       console.log(response) 
   })
   .catch(async err => {
    console.log(err)
   })   

  }
}
