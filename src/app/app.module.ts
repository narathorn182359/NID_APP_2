import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Badge } from '@ionic-native/badge/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'https://new-nodejsnio.herokuapp.com', options: {} };
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    SocketIoModule.forRoot(config)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    Badge,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

