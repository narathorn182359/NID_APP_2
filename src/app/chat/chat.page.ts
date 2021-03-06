import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
  MenuController,
  ToastController,
} from "@ionic/angular";
import { ApidataService } from "../api/apidata.service";
import { AuthService } from "../api/auth.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { IonContent } from "@ionic/angular";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { IonInfiniteScroll } from "@ionic/angular";
import { CreateGroupChatPage } from "../create-group-chat/create-group-chat.page";
import { ModalController } from "@ionic/angular";
import { IonSlides } from "@ionic/angular";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
})
export class ChatPage implements OnInit {
  @ViewChild("IonInfiniteScroll", { read: ElementRef, static: true })
  infiniteScroll: ElementRef;
  @ViewChild("slides", { static: true }) slider: IonSlides;
  segment = 0;
  segmentModel: string = "สนทนา";
  datainfouser: any;
  position: any;
  alluser = [];
  public searchControl: FormControl;
  public searchControl_history_chat: FormControl;
  public searchControl_em_chat: FormControl;
  public items: any;
  searching: any = false;
  tetst: any;
  users = [];
  search: any;
  alluser_no = [];
  history_chat = [];
  username: any;
  data: { chat_partner: any; owner_room: any; img_s: any };
  username_all = [];
  count_em = 1;
  getuserall: any;
  user_id: any;
  group_chat: any;
  status_confirm: any;
  role_com:any;
  company: any;
  constructor(
    private socket: Socket,
    public navCtrl: NavController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    public apidataService: ApidataService,
    private authService: AuthService,
    public toastController: ToastController,
    private router: Router,
    private storage: Storage,
    private modalController: ModalController
  ) {
    this.searchControl = new FormControl();
    this.searchControl_history_chat = new FormControl();
    this.searchControl_em_chat = new FormControl();
  }

  ngOnInit() {
    this.get_positin("");
    this.get_username_all("");
    this.checkAuthenticated();
    this.get_group_chat();

    this.get_history_chat("");

    this.socket.fromEvent("message").subscribe((message) => {
      setTimeout(() => {
        this.get_history_chat("");
        this.get_group_chat();
      }, 1000);
    });
  }
  async ionViewWillEnter() {
    this.socket.connect();
    this.status_confirm_join_group();
    this.get_history_chat("");
    this.get_group_chat();
    this.role_company();
  }

  onSearchInput() {
    this.searching = true;
  }

  role_company(){
    this.apidataService
    .role_com('company')
    .then(async (response: any) => {
      if (response.status == "Y") {
        this.company = response.company;
        this.role_com = response.status;
      } 
      console.log(response.company);
    })
    .catch(async (err) => {
      //console.log(err)
    });
  }

  detail_en(c:string){
    this.storage.remove("company");
    this.storage.set("company", c);
    this.router.navigateByUrl("/tabss/tabs/chat/em-company");
  }











  get_group_chat() {
    this.apidataService
      .get_group_chat("")
      .then(async (response: any) => {
        if (response != "404") {
          this.group_chat = response;
        } else {
          this.group_chat == null;
        }
        console.log(response);
      })
      .catch(async (err) => {
        //console.log(err)
      });
  }

  status_confirm_join_group() {
    this.searching = true;
    this.apidataService
      .status_confirm_join_group()
      .then(async (response: any) => {
        if (response != "null") {
          this.status_confirm = response;
          this.searching = false;
        } else {
          this.status_confirm = null;
          this.searching = false;
        }
      })
      .catch(async (err) => {
        this.authService.removeCredentials();
        this.navCtrl.navigateRoot("/login");

        console.log(err);
      });
  }

  confirm(value: any, id: any) {
    this.apidataService
      .confirm(value, id)
      .then(async (response: any) => {
        //console.log(response)
        this.get_group_chat();
        this.status_confirm_join_group();
      })
      .catch(async (err) => {
        console.log(err);
      });
  }

  async checkAuthenticated() {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if (isAuthenticated == true) {
        this.searchControl.valueChanges
          .pipe(debounceTime(700))
          .subscribe((search) => {
            this.get_positin(search);
            this.searching = false;
          });

        this.searchControl_history_chat.valueChanges
          .pipe(debounceTime(700))
          .subscribe((search) => {
            this.get_history_chat(search);
            this.searching = false;
          });

        this.searchControl_em_chat.valueChanges
          .pipe(debounceTime(700))
          .subscribe((search) => {
            this.get_username_all(search);

            this.searching = false;
          });

        this.apidataService
          .getuserInfo()
          .then(async (response: any) => {
            this.datainfouser = response;
          })
          .catch(async (err) => {
            console.log(err);
          });
        // console.log(isAuthenticated);
      } else {
        this.navCtrl.navigateRoot("");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async get_positin(value: any) {
    this.searching = true;
    this.apidataService
      .get_positin(value)
      .then(async (response: any) => {
        this.position = response;
        this.searching = false;
      })
      .catch(async (err) => {
        this.authService.removeCredentials();
        this.navCtrl.navigateRoot("/login");
        console.log(err);
      });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.status_confirm_join_group();
      this.checkAuthenticated();
      this.get_group_chat();
      event.target.complete();
    }, 2000);
  }

  async detail_position(id) {
    this.storage.remove("position");
    this.storage.set("position", id);
    this.router.navigateByUrl("/tabss/tabs/chat/position-detail");
  }

  segmentChanged(ev: any) {
    this.get_history_chat("");
    this.status_confirm_join_group();
    this.get_group_chat();
  }

  async get_history_chat(value) {
    this.searching = true;
 
    this.apidataService
      .get_history_chat(value)
      .then(async (response: any) => {
        this.history_chat = response;
        this.searching = false;
      
     
        console.log(response);
      })
      .catch(async (err) => {
        
        console.log(err);
      });
  }

  async get_username_all(value) {
    this.apidataService
      .get_username_all(value, this.count_em)
      .then(async (response: any) => {
        this.getuserall = response;

        if (value == "") {
          if (this.count_em == 1) {
            this.username_all = [];
          }
          for (let data of response.data) {
            let i = {
              Name_Thai: data["Name_Thai"],
              Position: data["Position"],
              img: data["img"],
              Code_Staff: data["Code_Staff"],
            };

            this.username_all.push(i);
          }
        } else {
          this.username_all = [];
          this.count_em = 1;
          for (let data of response.data) {
            let i = {
              Name_Thai: data["Name_Thai"],
              Position: data["Position"],
              img: data["img"],
              Code_Staff: data["Code_Staff"],
            };

            this.username_all.push(i);
          }
        }

        // console.log(response);
      });
  }
  /////
  async chat(id) {
    this.apidataService.remove_noti(id).then(async (response: any) => {
      console.log(response);
    });

    this.apidataService.getuserid().then(async (response: any) => {
      let username = response.username;
      let img = response.username + ".jpg";

      this.router.navigateByUrl(
        "/tabss/tabs/chat/detail-staff/" + id + "/" + username + "/" + img
      );
    });
  }

  async chat_group(id) {
    this.apidataService.remove_noti_group(id).then(async (response: any) => {
      console.log(response);
    });
    this.router.navigateByUrl("/tabss/tabs/chat/chat-group-room/" + id);
  }

  loadData_em(event) {
    if (this.getuserall.last_page == this.count_em) {
      console.log("Done");
      event.target.complete();
    } else {
      this.count_em++;
      this.apidataService
        .get_username_all("", this.count_em)
        .then(async (response: any) => {
          if (response) {
            this.get_username_all("");

            event.target.disabled = false;
            //  console.log(this.count_em);
            event.target.complete();
          }
        });
    }
  }

  async CreateGroupModal() {
    const modal = await this.modalController.create({
      component: CreateGroupChatPage,
      cssClass: "",
      componentProps: {},
    });
    modal.onDidDismiss().then((data) => {
      this.get_group_chat();
    });
    return await modal.present();
  }


  async segmentChanged_2() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
}
