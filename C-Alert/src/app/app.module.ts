import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
    
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right',preventDuplicates: true,}),
    ReactiveFormsModule,
    
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
       //  provideFirebaseApp(() => initializeApp(environment.firebase)),
       //  provideAuth(() => getAuth()),
        // provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
