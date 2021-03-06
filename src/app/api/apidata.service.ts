import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { HTTP } from "@ionic-native/http/ngx";
import { Service } from "../../settings/Laravel";

@Injectable({
  providedIn: "root"
})
export class ApidataService {
  unitsInfo: any;
  public items: any = [];
  constructor(
    public http: HttpClient,
    private storage: Storage,
    public https: HTTP
  ) {}

  filterItems(searchTerm) {
    this.getkm360list_search()
      .then(async (response: any) => {
        this.items = response;
      })
      .catch(async err => {
        console.log(err);
      });
    return this.items.filter(item => {
      return item.km_title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  async getuserInfo() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/user`, { headers }).toPromise();
  }

  async getlistmenu() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/listmenu`, { headers }).toPromise();
  }

  async getListData2(item: any, page: any) {
    let request = {
      search: item.search
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/searchdata2`, request, { headers })
      .toPromise();
  }

  async getliststaff() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/liststaff`, { headers })
      .toPromise();
  }

  async getdepartment() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/department`, { headers })
      .toPromise();
  }

  async getjob_family() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/job_family`, { headers })
      .toPromise();
  }

  async getlavel() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/lavel`, { headers }).toPromise();
  }

  async position() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/position`, { headers }).toPromise();
  }

  async company() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/company`, { headers }).toPromise();
  }

  async brand() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/brand`, { headers }).toPromise();
  }

  async getnew() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/feednew`, { headers }).toPromise();
  }

  async getDetailnew(item: any) {
    let request = {
      id: item
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/getDetailnew`, request, { headers })
      .toPromise();
  }

  async getDetail_new(item: any) {
    let request = {
      id: item
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/get_detail_new`, request, { headers })
      .toPromise();
  }

  async gethead_new(item: any) {
    let request = {
      id: item
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/gethead_new`, request, { headers })
      .toPromise();
  }

  async getsale_day() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/get_salse`, { headers })
      .toPromise();
  }

  async save_profile(item: any) {
    let request = {
      phone: item.phone
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/save_profile`, request, { headers })
      .toPromise();
  }

  async banner() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/banner`, { headers }).toPromise();
  }

  async getimg(item: any) {
    let request = {
      id: item
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/getimg`, request, { headers })
      .toPromise();
  }

  async getimg_banner_d(item: any) {
    let request = {
      id: item
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/getimg_banner_d`, request, { headers })
      .toPromise();
  }

  async sales_single() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/sales_single`, { headers })
      .toPromise();
  }

  async get_salse_sumdaily() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/get_salse_sumdaily`, { headers })
      .toPromise();
  }

  async getalluser(item: any, search_us: any) {
    let request = item;
    let search = search_us;
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(
        `${Service.apiUrl}/getalluser?page=` + request + "&search=" + search,
        { headers }
      )
      .toPromise();
  }

  async get_sales_search(item: any) {
    let request = {
      day: item.day,
      month: item.month,
      year: item.year
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_sales_search`, request, { headers })
      .toPromise();
  }

  async getDetail_Staff(item: any) {
    let request = {
      id: item
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_detail_staff`, request, { headers })
      .toPromise();
  }

  async get_km360() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/get_km360`, { headers })
      .toPromise();
  }

  async getkm360list_search() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/getkm360list_search`, { headers })
      .toPromise();
  }

  async get_iform() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/get_iform`, { headers })
      .toPromise();
  }

  async getkm360list(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/getkm360list`, request, { headers })
      .toPromise();
  }

  async getkmimgpreview(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/getkmimgpreview`, request, { headers })
      .toPromise();
  }

  async getkmimgdetail(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/getkmimgdetail`, request, { headers })
      .toPromise();
  }

  async count_read(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/count_read`, request, { headers })
      .toPromise();
  }

  async get_list_benefits() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/get_list_benefits`, { headers })
      .toPromise();
  }

  async micro(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/micro`, request, { headers })
      .toPromise();
  }

  async micro_name(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/micro_name`, request, { headers })
      .toPromise();
  }

  async getProduct(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/getProduct`, request, { headers })
      .toPromise();
  }

  async getProduct_list(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/getProduct_list`, request, { headers })
      .toPromise();
  }

  async getkmfile(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/getkmfile`, request, { headers })
      .toPromise();
  }

  async ch_password(item: any) {
    let request = {
      password_old: item.password_old,
      password_new: item.password_new,
      password_con: item.password_con
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/password_ch`, request, { headers })
      .toPromise();
  }

  async kmhr() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/kmhr`, { headers }).toPromise();
  }

  async gethrbp() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http.get(`${Service.apiUrl}/gethrbp`, { headers }).toPromise();
  }

  async getaccident() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/getaccident`, { headers })
      .toPromise();
  }

  async getproviden() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/getproviden`, { headers })
      .toPromise();
  }

  async getinsurance() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/getinsurance`, { headers })
      .toPromise();
  }

  async gethealth() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/gethealth`, { headers })
      .toPromise();
  }

  async getemployee() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/getemployee`, { headers })
      .toPromise();
  }

  async get_be(id: any) {
    let request = {
      id: id
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_detail_be`, request, { headers })
      .toPromise();
  }

  async getuserid() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/getuserid`, { headers })
      .toPromise();
  }

  async alert_daily(value: any) {
    let request = {
      value: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/alert_daily`, request, { headers })
      .toPromise();
  }
  async alert_daily_c() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/alert_daily_c`, { headers })
      .toPromise();
  }

  async get_positin(value: any) {
    let request = {
      value: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_positin`, request, { headers })
      .toPromise();
  }

  async get_contact(value: any) {
    let request = {
      value: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_contact`, request, { headers })
      .toPromise();
  }

  async save_chat(value: any) {
    let request = {
      msg: value.msg,
      /*   'img_ad':value.img_ad, */
      owner_room: value.owner_room,
      chat_partner: value.chat_partner,
      createdAt: value.createdAt
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/save_chat`, request, { headers })
      .toPromise();
  }

  async get_chat(value: any) {
    let request = {
      user: value.msg,
      /*   'img_ad':value.img_ad, */
      owner_room: value.owner_room,
      chat_partner: value.chat_partner
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_chat`, request, { headers })
      .toPromise();
  }

  async get_username() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .get(`${Service.apiUrl}/get_username`, { headers })
      .toPromise();
  }

  async get_history_chat(value: any) {
    let request = {
      value: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_history_chat`, request, { headers })
      .toPromise();
  }

  async get_username_all(value: any, page: any) {
    let request = {
      value: value,
      page: page
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/get_username_all?page=` + page, request, {
        headers
      })
      .toPromise();
  }

  async get_username_all_addroom() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .get(`${Service.apiUrl}/get_username_all_addroom`, { headers })
      .toPromise();
  }

  async save_room_chat(value: any, i: any) {
    let request = {
      name_group: value.name_group,
      username: i
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/save_addroom`, request, { headers })
      .toPromise();
  }

  async check_room(value: any) {
    let request = {
      check_room: value.check_room
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/check_room`, request, { headers })
      .toPromise();
  }

  async get_group_chat(value: any) {
    let request = {
      group_chat: value.group_chat
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_group_chat`, request, { headers })
      .toPromise();
  }

  async get_chat_group(value: any) {
    let request = {
      id_room: value.id_room,
      chat_partner: value.chat_partner
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/get_chat_group`, request, { headers })
      .toPromise();
  }

  async save_chat_group(value: any) {
    let request = {
      id_room: value.id_room,
      chat_partner: value.msg
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/save_chat_group`, request, { headers })
      .toPromise();
  }

  async status_confirm_join_group() {
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .get(`${Service.apiUrl}/status_confirm_join_group`, { headers })
      .toPromise();
  }

  async confirm(value: any, id: any) {
    let request = {
      id: id,
      confirm: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    return this.http
      .post(`${Service.apiUrl}/confirm`, request, { headers })
      .toPromise();
  }

  async exit_group_chat(value: any) {
    let request = {
      id: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/exit_group_chat`, request, { headers })
      .toPromise();
  }

  async save_key_player(value: any) {
    let request = {
      key: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/save_key_player`, request, { headers })
      .toPromise();
  }

  async logout_key(value: any) {
    let request = {
      key: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/logout_key`, request, { headers })
      .toPromise();
  }

  async add_staff_ingroup(value: any) {
    let request = {
      room: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/add_staff_ingroup`, request, { headers })
      .toPromise();
  }

  async save_staff_ingroup(value: any, room: any) {
    let request = {
      room: room,
      username: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/save_staff_ingroup`, request, { headers })
      .toPromise();
  }

  async remove_noti(value: any) {
    let request = {
      username: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/remove_noti`, request, { headers })
      .toPromise();
  }

  async remove_noti_group(value: any) {
    let request = {
      room: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/remove_noti_group`, request, { headers })
      .toPromise();
  }

  async save_img_chat(value: any) {
    let request = {
      image: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/save_img_chat`, request, { headers })
      .toPromise();
  }

  async listkmhr(value: any) {
    let request = {
      type: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/listkmhr`, request, { headers })
      .toPromise();
  }

  async listkmhrdetail(value: any) {
    let request = {
      type: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/listkmhrdetail`, request, { headers })
      .toPromise();
  }



  async save_img_profile(value: any) {
    let request = {
      image: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/save_img_profile`, request, { headers })
      .toPromise();
  }

  async role_com(value: any) {
    let request = {
      type: value
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/role_com`, request, { headers })
      .toPromise();
  }




  async get_em_company(value: any,search:any){
    let request = {
      type: value,
      name:search
    };
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });

    return this.http
      .post(`${Service.apiUrl}/get_em_company`, request, { headers })
      .toPromise();
  }






  
}
