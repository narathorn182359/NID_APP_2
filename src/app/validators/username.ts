import { FormControl } from '@angular/forms';
import { ApidataService } from '../api/apidata.service';
export class UsernameValidator {

 
  static checkUsername(control: FormControl,
    apidataService: ApidataService
    ): any {

    return new Promise(resolve => {

      //Fake a slow response from server


      apidataService.check_room(control.value.toLowerCase()).then(async (response: any) => {
          console.log();
          if(response === "500"){

            resolve({
              "username taken": true
            });
  
          } else {
            resolve(null);
          }
      
          })




       


    });
  }

}