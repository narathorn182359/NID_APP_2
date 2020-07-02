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
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { IonicSelectableModule } from 'ionic-selectable';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
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
    SocketIoModule.forRoot(config),
    IonicSelectableModule
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    Badge,
    Crop,
    Camera,
    File,
    PhotoViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OneSignal,
    InAppBrowser ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

