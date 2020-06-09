export const Service: any = {

    /**
     * Url of your Laravel Project
     */
   // url: 'http://127.0.0.1/LumenPassport/public/',
   // apiUrl: 'http://127.0.0.1/LumenPassport/public/api',
 
    url: 'http://127.0.0.1:8000',
   apiUrl: 'http://127.0.0.1:8000/api',


      /**
     *
     * Info of your passport client, usually second record on table "oauth_clients" in your database, name "Laravel Password Grant Client"
     */
    passport: {
        'grant_type': 'password',
        'client_id': '3',
        'client_secret': 'P4cJDTMGzaAhcuCuKSSCYbw2OZkluchgdjlDhPZt',
    }

};
