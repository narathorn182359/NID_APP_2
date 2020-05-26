import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApidataService } from '../api/apidata.service';
@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.page.html',
  styleUrls: ['./addstaff.page.scss'],
})
export class AddstaffPage implements OnInit {

  public loginForm: FormGroup;
  listposition:any;
  listcompany:any;
  listlevel:any;
  listjob_family:any;
  listdepartment:any;

  constructor(public formBuilder: FormBuilder,
    public apidataService: ApidataService
    
    
    ) { 
    this.loginForm = this.formBuilder.group({

      username_login: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      titel: new FormControl('', Validators.compose([
        Validators.required
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      sex: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nikname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      department: new FormControl('', Validators.compose([
        Validators.required
      ])),
      position: new FormControl('', Validators.compose([
        Validators.required
      ])),
      company: new FormControl('', Validators.compose([
        Validators.required
      ])),
      brand: new FormControl('', Validators.compose([
        Validators.required
      ]))
      





    });



  }

  ngOnInit() {
    this.getposition();
    this.getcompany();
    this.getlevel();
    this.getjob_family();
    this.getdepartment();
  
  }


  async getposition(){
    this.apidataService.position()
    .then(async (response: any) => {
      this.listposition = response;
       console.log(response)
   })
   .catch(async err => {
    console.log(err)
   })
  }

  async getcompany(){
    this.apidataService.getliststaff()
    .then(async (response: any) => {
      this.listcompany = response;
       console.log(response)
   })
   .catch(async err => {
    console.log(err)
   })
  }



  async getlevel(){
    this.apidataService.getlavel()
    .then(async (response: any) => {
      this.listlevel = response;
       console.log(response)
   })
   .catch(async err => {
    console.log(err)
   })
  }



  async getjob_family(){
    this.apidataService.getjob_family()
    .then(async (response: any) => {
      this.listjob_family = response;
       console.log(response)
   })
   .catch(async err => {
    console.log(err)
   })
  }



  async getdepartment(){
    this.apidataService.getdepartment()
    .then(async (response: any) => {
      this.listdepartment = response;
       console.log(response)
   })
   .catch(async err => {
    console.log(err)
   })
  }

  async getbrand(){
    this.apidataService.brand()
    .then(async (response: any) => {
      this.listdepartment = response;
       console.log(response)
   })
   .catch(async err => {
    console.log(err)
   })
  }













  onClickSubmit() {
    console.log('Start login with: ' 
                + this.loginForm.value.username + ':' 
                + this.loginForm.value.department);
  }
}
