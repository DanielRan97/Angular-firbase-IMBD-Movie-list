import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NebularModule } from './nebular/nebular.module';
import { NbIconModule, NbSidebarModule, NbMenuModule, NbDialogModule } from '@nebular/theme';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { OutComponent } from './out/out.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    OutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NebularModule,
    NbIconModule,
    NbSidebarModule,
    NbMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbDialogModule.forRoot(),

    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
