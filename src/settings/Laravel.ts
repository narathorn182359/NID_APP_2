export const Service: any = {

    /**
     * Url of your Laravel Project
     */
 url: 'http://192.168.3.185/NID-Passport/public',
 apiUrl: 'http://192.168.3.185/NID-Passport/public/api',
 

    //url: 'http://127.0.0.1:8000',
    //apiUrl: 'http://127.0.0.1:8000/api',


      /**
     *
     * Info of your passport client, usually second record on table "oauth_clients" in your database, name "Laravel Password Grant Client"
     */
    passport: {
        'grant_type': 'password',
        'client_id': '6',
        'client_secret': 'e2qfiHDWym2guNyKuXhehLqB2cQ3N738WEr0JkXB',
       }

};
