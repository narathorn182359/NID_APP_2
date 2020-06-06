export const Service: any = {

    /**
     * Url of your Laravel Project
     */
    //url: 'http://18.140.109.247/nidapi',
    //apiUrl: 'http://18.140.109.247/nidapi/api',
 
    url: 'http://127.0.0.1:8000',
    apiUrl: 'http://127.0.0.1:8000/api',

      /**
     *
     * Info of your passport client, usually second record on table "oauth_clients" in your database, name "Laravel Password Grant Client"
     */
    passport: {
        'grant_type': 'password',
        'client_id': '1',
        'client_secret': '6Op5WO81R1x7ggTTTcUddkKukXEBgPaqXEQYm3EP',
    }

};
