export const Service: any = {

    /**
     * Url of your Laravel Project
     */
    //url: 'http://18.140.109.247/nidapi',
    //apiUrl: 'http://18.140.109.247/nidapi/api',
 
    url: 'http://localhost:8100',
    apiUrl: 'http://localhost:8100/api',

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
